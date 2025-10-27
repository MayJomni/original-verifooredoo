//onst express=require("express")require("dotenv").config();
//const app=express();
//middlware pour lire les donnees json
//app.use(express.json());
//connect to DB
//const connectDB=require('./config/connectDB');
//connectDB();

//import routes
//app.use('/api/user',require('./routes/auth.route'))

//const PORT=process.env.PORT || 5000;

//app.listen(PORT,(err)=>{
    //err
      //? console.log(err)
      //: console.log(`server is running on port: http://localhost:${PORT}`);
      //demarrer le serveur
//});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./backend/routes/auth'));
app.use('/api/users', require('./backend/routes/users'));
app.use('/api/forfaits', require('./backend/routes/forfaits'));
app.use('/api/products', require('./backend/routes/products'));
app.use('/api/challenges', require('./backend/routes/challenges'));
app.use('/api/orders', require('./backend/routes/orders'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/verifooredoo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});