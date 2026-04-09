const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
    required: true,
  },
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "materials",
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  documentText: {
    type: String,
    required: true,
    trim: true,
  },
  processedStatus: {
    type: String,
    enum: ["pending", "processed", "failed"],
    default: "pending",
  },
});

module.exports = mongoose.model("documents", documentSchema);
