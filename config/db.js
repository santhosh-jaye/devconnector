const mongoose = require('mongoose');
const config = require('config');

const URI = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
