const mongoose = require('mongoose');
// const config = require('config');
// const db = process.env.mongoURI;
const db = "mongodb+srv://Gregory:viwejf0509@test.lrdmqtf.mongodb.net/IPFY"

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
