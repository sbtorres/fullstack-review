const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sbtorres:scott@githubfetcher-o2u5g.mongodb.net/test?retryWrites=true');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB database!'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
})

let repoSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    username: String,
    repo_name: String,
    description: String,
    stars: Number,
    forks: Number,
    updated_at: Date,
    language: String,
    repoLink: String,
    avatarLink: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData, callback) => {
  Repo.insertMany(repoData, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      console.log("Docs successfully inserted: ", docs);
      callback(null, docs);
    }
  })
}

let findTop25Repos = (callback) => {
  Repo.aggregate({$sort: {stars: -1}}, {$limit: 25}, function (err, repo) {
    if (err) return console.error(err);
    callback(null, JSON.stringify(repo));
  })
}

module.exports = {
  save, findTop25Repos
}