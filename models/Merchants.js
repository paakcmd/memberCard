const mongoose = require('mongoose');
const { Schema } = mongoose;

const merchantSchema = new Schema({
  brand: String,
  userId: String,
  imageUrl: String,
  brandId: { type: String, unique:true },

});

mongoose.model('merchants', merchantSchema);
