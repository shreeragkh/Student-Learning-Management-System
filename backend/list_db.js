require('dotenv').config();
const mongoose = require('mongoose');

async function test() {
  await mongoose.connect(process.env.MONGO_URI);
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("Collections:", collections.map(c => c.name));
  
  if (collections.some(c => c.name === 'users')) {
    const count = await mongoose.connection.db.collection('users').countDocuments();
    console.log("Users count:", count);
  }
  
  if (collections.some(c => c.name === 'studymaterials')) {
    const count = await mongoose.connection.db.collection('studymaterials').countDocuments();
    console.log("StudyMaterials count:", count);
  }

  process.exit();
}
test();
