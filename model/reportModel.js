const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },

  contradiction: {
    type: String,
  },

  potentialGreenswashing: {
    type: String,
  },

  freshness: {
    type: String,
  },

  sentToRegulators: {
    type: Boolean,
    default: false,
  },

  pending: {
    type: Boolean,
    default: true,
  },

  reviewed: {
    type: Boolean,
    default: false,
  },

  disregard: {
    type: Boolean,
    default: false,
  },

  summary: {
    type: String,
  },
});

module.exports = mongoose.model("report", reportSchema);
