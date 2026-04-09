const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizzes",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  answers: {
    type: [Object],
    default: [],
  },
  score: {
    type: Number,
    default: 0,
  },
  feedback: {
    type: String,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  attemptNumber: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("quizAttempts", quizAttemptSchema);
