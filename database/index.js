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
    description: String,
    stars: Number,
    forks: Number,
    updated_at: Date,
    language: String,
    repo_url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;