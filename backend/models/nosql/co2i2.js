const mongoose = require ("mongoose");

const co2i2Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('co2i2', co2i2Schema);