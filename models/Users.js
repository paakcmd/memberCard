const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  imageUrl: String,
  ref: { type: String, unique: true }
});

mongoose.model('users', userSchema);
