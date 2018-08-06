const mongoose = require('mongoose');
const { Schema } = mongoose;

const transcationSchema = new Schema({
  userId: String,
  brandId: String,
  ref: String,
  points: Number,
  transactionRef: { type: String, unique: true },
  time: { type: Date, default: Date.now }
});

mongoose.model('transcations', transcationSchema);
