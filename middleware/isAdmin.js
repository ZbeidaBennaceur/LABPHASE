const jwt = require('jsonwebtoken')
const User = require("../model/User");



const isAdmin=async(req,res,next)=>{
    try {

        //Verify if token exists
    const token =req.headers["authorization"]
    if (!token) {
        return res.status(400).json({errors:[{msg:"Pas de token"}]})
    }
const decode=jwt .verify(token,process.env.SECRET_KEY);
//console.log(decode)
const foundUser = await User.findById(decode.id);
if (!foundUser) {
    return res.status(400).json({errors:[{msg:"User non trouvé"}]})
}
if (!foundUser.isAdmin) {
    return res
    .status(400)
    .json({errors:[{msg:"Vous n'êtes pas admin"}]});
}
req.user=foundUser;
next();

        
    } catch (error) {
        return res.status(400).json({errors:[{msg:"Impossible de vérifier"}]})
    }
}

module.exports=isAdmin