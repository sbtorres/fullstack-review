const request = require('request');
const config = require('../config.js');
const fakeData = require('./../data.json');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      let parsedBody = JSON.parse(body);
      var shortenedRepos = [];
      for (let i = 0; i < parsedBody.length; i++) {
        let repo = parsedBody[i];
        shortenedRepos.push({id: repo.id, 
                             username: repo.owner.login, 
                             forks: repo.forks, 
                             repoLink: repo.html_url, 
                             repo_name: repo.name, 
                             updated_at: repo.updated_at, 
                             stars: repo.stargazers_count, 
                             description: repo.description, 
                             language: repo.language, 
                             avatarLink: repo.owner.avatar_url});
      }
      callback(null, shortenedRepos);
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;