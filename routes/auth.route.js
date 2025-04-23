//IMPORT EXPRESS
const express = require ('express');
const { register, login } = require('../controllers/auth.controller');
const {registerValidation,validation,loginValidation}=require('../middleware/validator');
const isAuth = require('../middleware/isAuth');
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
router.get('/current', isAuth, (req, res) => {
  if (!req.user) {
    return res.status(404).json({ msg: "Utilisateur non trouvé" });
  }
  res.status(200).json(req.user);
});
  



module.exports=router;