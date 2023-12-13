const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultantSchema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  description: {
    type: String,
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Consultant', consultantSchema);
