const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Blog', blogSchema);
