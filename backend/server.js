const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = require('./backend/config/connectDB');

// Routes
app.use('/api/auth', require('./backend/routes/auth_route'));
app.use('/api/users', require('./backend/routes/users'));
app.use('/api/forfaits', require('./backend/routes/forfaits'));
app.use('/api/products', require('./backend/routes/products'));
app.use('/api/challenges', require('./backend/routes/challenges'));
//app.use('/api/orders', require('./backend/routes/orders'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});