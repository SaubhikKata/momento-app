const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
