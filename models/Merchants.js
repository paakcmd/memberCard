const mongoose = require('mongoose');
const { Schema } = mongoose;

const merchantSchema = new Schema({
  brand: String,
  userId: String,
  imageUrl: String

});

mongoose.model('merchants', merchantSchema);
