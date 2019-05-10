const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

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

let save = (repoData) => {
  Repo.insertMany(repoData, (err, docs) => {
    if (err) {
      throw err;
    } else {
      console.log("Docs successfully inserted: ", docs);
    }
  })
}

module.exports.save = save;