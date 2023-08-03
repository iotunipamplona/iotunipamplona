const mongoose = require ("mongoose");

const humedadi3Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('humedadi3', humedadi3Schema);