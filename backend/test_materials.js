require('dotenv').config();
const mongoose = require('mongoose');

async function check() {
  await mongoose.connect(process.env.MONGO_URI);
  const StudyMaterial = require('./models/StudyMaterial');
  try {
    const materials = await StudyMaterial.find({})
      .select("-chunks -extractedText")
      .sort({ createdAt: -1 });
    console.log("Success! Found:", materials.length);
    if(materials.length > 0) {
      console.log("First item:", materials[0].title);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
  process.exit();
}
check();
