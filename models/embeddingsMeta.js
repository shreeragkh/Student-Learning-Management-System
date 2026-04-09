const mongoose = require("mongoose");

const embeddingsMetaSchema = new mongoose.Schema({
  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "documents",
    required: true,
  },
  chunkIndex: {
    type: Number,
    required: true,
  },
  vectorId: {
    type: String,
    required: true,
    trim: true,
  },
  chunkText: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("embeddingsMeta", embeddingsMetaSchema);
