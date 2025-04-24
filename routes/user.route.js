const express=require('express')
const {getAllUsers, deleteUser}=require("../controllers/user.controller");
const isAdmin = require('../middleware/isAdmin'); 


const router=express.Router();

//router.get('/test',(req,res)=>{
    //res.status(200).json({msg:"test route user"})
//})

router.get("/allUsers",isAdmin,getAllUsers)

router.delete("/:id",isAdmin,deleteUser)




module.exports=router;