const { log } = require("console");
const mongoose = require("mongoose");
const DBLINK = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(DBLINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB has been connected");
  } catch (error) {
    console.log(error.message);
    exit();
  }
};

module.exports = connectDB;
