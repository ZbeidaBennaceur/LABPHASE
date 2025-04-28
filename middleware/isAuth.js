const jwt = require('jsonwebtoken')
const User = require("../model/User");



const isAuth=async(req,res,next)=>{
    try {

        //Verify if token exists
    const token =req.headers["authorization"]
    if (!token) {
        return res.status(400).json({errors:[{msg:"Email ou mot de passe incorrect" }]})
    }
const decode=jwt .verify(token,process.env.SECRET_KEY);
//console.log(decode)
const foundUser = await User.findById(decode.id);
if (!foundUser) {
    return res.status(400).json({errors:[{msg:"Email ou mot de passe incorrect" }]})
}
req.user=foundUser;
next()



        
    } catch (error) {
        return res.status(400).json({errors:[{msg:"Email ou mot de passe incorrect" }]})
    }
}

module.exports=isAuth