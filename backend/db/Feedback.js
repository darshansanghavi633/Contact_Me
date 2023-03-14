const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    company:String,
    phone:String,
    message:String
});

module.exports = mongoose.model("feedback",feedbackSchema);