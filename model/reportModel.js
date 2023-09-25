const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },

  contradiction: {
    type: String,
  },

  age: {
    type: String,
  },

  priority: {
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

  reviewing: {
    type: Boolean,
    default: false,
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

  openedBy: {
    type: String,
  },

  assignedTo: {
    type: String,
  },

  timeStamp: {
    type: String,
  },

  comment: {
    type: String,
  },

  conclusion: {
    type: String,
  },

  updatedComment: {
    type: String,
  },
});

module.exports = mongoose.model("report", reportSchema);
