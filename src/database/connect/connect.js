const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect(process.env.DATABASE_URL);
  mongoose.connection
    .on('error', error => console.log(error))
    .once('open', () => console.log(`Database is connected!`))
}

module.exports = connectToDatabase;

