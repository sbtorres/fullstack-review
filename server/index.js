const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('./../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/repos', urlencodedParser, function (req, res) {
  github.getReposByUsername(req.body.username, (err, repoData) => {
    if (err) {
      throw err;
    } else {
      console.log(repoData);
      res.status(201);
      res.send(repoData);
    }
  });

  
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

