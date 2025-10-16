const express=require("express");

const router=express.Router();

const register=require('../controlleurs/auth.controlleur').register;
//router.get("/",(req,res)=>{res .status(200) .json("hello from user route")})
//pour enregistrer nouveau utilisateur sign up
router.post("/register", register);

//pour se connecter au compte user sign in 
const login=require('../controlleurs/auth.controlleur').login;
router.post("/login", login);

module.exports=router;

