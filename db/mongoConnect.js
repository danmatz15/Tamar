const mongoose = require('mongoose');
const { config } = require('../config/secret');

async function main() {
  try {
    mongoose.set('strictQuery', false);

    await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.of9f1ec.mongodb.net/dan`);
    console.log('MongoDB connection established');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();