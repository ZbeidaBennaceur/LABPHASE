//IMPORT EXPRESS
const express = require ('express');
const { register, login } = require('../controllers/auth.controller');
const {registerValidation,validation,loginValidation}=require('../middleware/validator')
const router = express.Router()
//TEST ROUTE

/*router.get('/test', (req,res)=>{
    res.json("TEST OF AUTH ROUTE")
})*/

//REGISTER
router.post('/register',registerValidation(),validation,register)

//LOGIN
router.post('/login',loginValidation(),validation,login)

//CURRENT USER
router.get('/current', (req,res)=>{
    res.json(req.user);
})


module.exports=router;