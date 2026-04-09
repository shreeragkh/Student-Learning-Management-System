const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/plms");

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
