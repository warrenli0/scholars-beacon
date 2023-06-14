const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  // You can add additional fields as necessary. For example:
  // email: String,
  // created: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
