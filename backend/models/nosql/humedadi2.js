const mongoose = require ("mongoose");

const humedadi2Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('humedadi2', humedadi2Schema);