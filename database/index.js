const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB database!'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
})

let repoSchema = mongoose.Schema({
    id: Number,
    username: String,
    repo_name: String,
    forks: Number,
    repo_url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;