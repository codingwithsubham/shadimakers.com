const mongoose = require("mongoose");
const { MONGO_URI_CLOUD } = require("./constant");
const config = require('config');
const mongoUrl = config.get(MONGO_URI_CLOUD);

const connectDB = async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(mongoUrl);
    console.log("DB Connected..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
