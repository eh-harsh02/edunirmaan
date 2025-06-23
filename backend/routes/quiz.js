const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/quiz
router.post("/", async (req, res) => {
  const { name, email, answers } = req.body;

  // (Optional) Integrate OpenAI here later
  const suggestedCareer = "Software Developer"; // dummy result

  const newUser = new User({ name, email, quizResults: answers });
  await newUser.save();

  res.json({ message: "Quiz submitted", career: suggestedCareer });
});

module.exports = router;
