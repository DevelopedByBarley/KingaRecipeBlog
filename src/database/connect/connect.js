const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb://localhost/recipeBlog');
  mongoose.connection
    .on('error', error => console.log(error))
    .once('open', () => console.log('Database is connected!'))
}

module.exports = connectToDatabase;

