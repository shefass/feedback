const mongoose = require('mongoose');

const Feedback = mongoose.model('Feedback', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 50
    },
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 5000
    }
  }));



exports.Feedback = Feedback; 