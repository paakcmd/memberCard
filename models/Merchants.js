const mongoose = require('mongoose');
const { Schema } = mongoose;

const merchantSchema = new Schema({
  brand: String,
  userId: { type: String, ref: 'users' },
  imageUrl: String
});

mongoose.model('merchants', merchantSchema);
