const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
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
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "dropped", "completed"],
    default: "active",
  },
});

module.exports = mongoose.model("enrollments", enrollmentSchema);
