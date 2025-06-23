const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  quizResults: Object,
  languagePreference: String
});

module.exports = mongoose.model("User", userSchema);
