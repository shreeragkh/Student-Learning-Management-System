require('dotenv').config();
const mongoose = require('mongoose');

async function test() {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await mongoose.connection.db.collection('users').findOne({ _id: new mongoose.Types.ObjectId('69d76a47fb32ddf7d80195e9') });
  console.log("User:", user);
  process.exit();
}
test();
