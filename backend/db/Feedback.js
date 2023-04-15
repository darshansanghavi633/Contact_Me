const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
