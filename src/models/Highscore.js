const mongoose = require("mongoose");

const HighscoreSchema = new mongoose.Schema({
  name: String,
  words: Number,
  chars: Number
});

module.exports = mongoose.model("Highscore", HighscoreSchema);
