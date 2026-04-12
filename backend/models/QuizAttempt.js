const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    questionIndex: { type: Number, required: true },
    selectedOption: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    marksAwarded: { type: Number, required: true }
  },
  { _id: false }
);

const quizAttemptSchema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    score: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    answers: { type: [answerSchema], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);
