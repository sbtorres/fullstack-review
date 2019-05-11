const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const github = require('./../helpers/github.js');
const db = require('./../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/repos', urlencodedParser, function (req, res) {
  github.getReposByUsername(req.body.username, (err, repoData) => {
    if (err) {
      console.log(err);
    } else {
      db.save(repoData, (err, result) => {
        if (err) {
          res.status(500);
          res.send(err);
        } else {
          res.status(201);
          res.send(result);
        }
      });
    }
  });
});

app.get('/repos', function (req, res) {
  db.findTop25Repos((err, top25Repos) => {
    top25Repos = JSON.stringify(top25Repos);
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.send(top25Repos);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

