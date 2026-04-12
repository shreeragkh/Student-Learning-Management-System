require('dotenv').config();
const mongoose = require('mongoose');

async function test() {
  await mongoose.connect(process.env.MONGO_URI);
  const StudyMaterial = require('./models/StudyMaterial');
  try {
    const doc = new StudyMaterial({
      title: "Test Material",
      description: "Test Desc",
      course: "Test Course",
      uploadedBy: new mongoose.Types.ObjectId(),
      fileName: "test.pdf",
      fileType: "application/pdf",
      s3Key: "test/key",
      s3Url: "http://example.com/test.pdf",
      extractedText: "A".repeat(50000), // Simulate large text
      chunks: Array(50).fill(0).map((_, i) => ({
        chunkIndex: i,
        text: "chunk text " + i,
        embedding: [],
        metadata: { type: "general" }
      })),
      status: "approved"
    });
    await doc.save();
    console.log("Saved test material:", doc._id);
    
    // Now delete it
    await StudyMaterial.deleteOne({ _id: doc._id });
    console.log("Deleted test material");
  } catch (err) {
    console.error("Save error:", err);
  }
  process.exit();
}
test();
