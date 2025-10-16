const express=require("express");
require("dotenv").config();
const app=express();
//middlware pour lire les donnees json
app.use(express.json());
//connect to DB
const connectDB=require('./config/connectDB');
connectDB();

//import routes
app.use('/api/user',require('./routes/auth.route'))

const PORT=process.env.PORT || 5000;

app.listen(PORT,(err)=>{
    err
      ? console.log(err)
      : console.log(`server is running on port: http://localhost:${PORT}`);
      //demarrer le serveur
});

