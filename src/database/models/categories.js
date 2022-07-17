const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageName: {
    type: String,
    required: false
  }
})


module.exports = mongoose.model('Categories', categoriesSchema);