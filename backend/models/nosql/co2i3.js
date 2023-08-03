const mongoose = require ("mongoose");

const co2i3Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('co2i3', co2i3Schema);