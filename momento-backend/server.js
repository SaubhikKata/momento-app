const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env variables from .env file
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes (your file: restaurant.js)
const restaurantRoutes = require('./restaurant');

// Use the route
app.use('/api/restaurants', restaurantRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('🍽️ Momento Backend is Live!');
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server connected on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
