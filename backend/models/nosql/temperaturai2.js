const mongoose = require ("mongoose");

const temperaturai2Schema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('temperaturai2', temperaturai2Schema);