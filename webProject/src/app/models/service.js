const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const serviceSchema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  description: {
    type: String,
  },
  implementer: {
    type: String,
  },
  price: {
    type: Number,
  },
  timeSession: {
    type: Number,
  },
  totalSession: {
    type: Number,
  },
  slug: {
    type: String, slug: 'name', unique: true
  },
  typeService: {
    type: String,
    enum: ['mother', 'baby'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Service', serviceSchema);
