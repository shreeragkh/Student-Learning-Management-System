const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  questions: {
    type: [Object],
    default: [],
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: String,
    enum: ["teacher", "ai"],
    default: "teacher",
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quizzes", quizSchema);
