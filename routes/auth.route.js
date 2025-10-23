const express=require("express");
const router=express.Router();
const register=require('../controlleurs/auth.controlleur').register;
const isAuth=require('../middeleware/isAuth');
const {registerValidator,validation,loginValidator}=require('../middeleware/validator');

// router.get("/",(req,res)=>{res .status(200) .json("hello from user route")})

//pour enregistrer nouveau utilisateur sign up
router.post("/register",registerValidator(),validation, register);

//pour se connecter au compte user sign in 
const login=require('../controlleurs/auth.controlleur').login;
router.post("/login",loginValidator(),validation, login);
//current pour identifier le user connecter avec le middleware
router.get('/current', isAuth ,(req,res)=>{
    res.json(req.user);
});

module.exports=router

