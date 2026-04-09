const mongoose = require("mongoose");

const aiInteractionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  query: {
    type: String,
    required: true,
    trim: true,
  },
  response: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["chat", "quiz_generation", "feedback"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("aiInteractions", aiInteractionSchema);
