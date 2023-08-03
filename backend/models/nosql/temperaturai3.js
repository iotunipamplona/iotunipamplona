const mongoose = require ("mongoose");

const temperaturai3Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('temperaturai3', temperaturai3Schema);