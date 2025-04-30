const express = require('express');
const router = express.Router();
const {createPiscine}=require('../controllers/piscine.controller')
const {getPiscineByUser}=require('../controllers/piscine.controller')
const {editPiscine}=require('../controllers/piscine.controller')
const {deletePiscine}=require('../controllers/piscine.controller')
const isAuth=require('../middleware/isAuth')

// TEST PISCINE ROUTE
//router.get('/test', (req, res) => {
 // res.status(200).json("Route piscine ok");
//});

router.post('/addPiscine',isAuth,createPiscine)
router.get('/allPiscine',isAuth,getPiscineByUser)
router.put('/:id',isAuth,editPiscine)
router.delete('/:id',isAuth,deletePiscine)



module.exports = router;