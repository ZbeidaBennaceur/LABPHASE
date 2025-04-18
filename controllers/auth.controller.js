
const User = require("../model/User");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    try {
        const {name,email,password,city,phone}=req.body;
        const foundUser=await User.findOne({email});
        if (foundUser) {
            return res.status(400)
            .json({errors:[{msg:"Cet email existe déjà"}]})
        }
        const saltRounds=10;
        const hashPassword=await bcrypt.hash(password,saltRounds);
        const newUser = new User ({name,email,password:hashPassword,city,phone})

        await newUser.save();
        //create token
        const token=jwt.sign(
        {id:newUser._id},
        process.env.SECRET_KEY,
        {expiresIn:"2h"});
        
        res.status(200).json({success:[{msg:"Utilisateur enregistré avec succès"}],user:newUser,token})
    } catch (error) {
        res.status(400).json({errors:[{msg:"L'enregistrement a échoué"}],error})
    }
};

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const foundUser=await User.findOne({email})
        if(!foundUser){
            return res.status(400).json({errors:[{msg:"Email ou mot de passe incorrect"}]})
        }
        const checkPassword= await bcrypt.compare(password,foundUser.password)
        if (!checkPassword){
            return res.status(400).json({errors:[{msg:"Email ou mot de passe incorrect"}]})
        }
        res.status(200).json({success:[{msg:"Login fait avec succès"}],user:foundUser})
    } catch (error) {
        res.status(400).json({errors:[{msg:"Le login a échoué"}],error})
    }
};