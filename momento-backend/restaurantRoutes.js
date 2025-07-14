// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const Restaurant = require('./Restaurant');

// GET all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
