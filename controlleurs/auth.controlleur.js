//controlleur pur faire le sign up  d un nouveau utilisateur
exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const foundUser=await User.findOne({email});
        if(foundUser){
            return res.status(400).json({error:[{msg:"email should be unique!"}]});
        }
        //dans le cas ou user n existe pas encore
        const newUser=new User({name,email,password});
        await newUser.save();
        res.status(201).json({success:[{msg:"registered successfully!"}],user:newUser});
    }catch(error){
        res.status(400).json({error:[{msg:"could not register the user!"}],});
    }    
};



exports.login=async(req,res)=>{}
