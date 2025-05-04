const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/piscines';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });


const {
  createPiscine,
  getPiscineByUser,
  getAllpiscines,
  editPiscine,
  deletePiscine
} = require('../controllers/piscine.controller');
const isAuth = require('../middleware/isAuth');

//Créer un devis piscine
router.post('/addPiscine', isAuth, upload.single('pdf'), createPiscine);

//Obtenir tous les devis
router.get('/', isAdmin, getAllpiscines);

//Obtenir les devis de l'utilisateur connecté
router.get('/mesPiscines', isAuth, getPiscineByUser);

//Modifier un devis piscine existant
router.put('/:id', isAuth, editPiscine);

//Supprimer un devis piscine
router.delete('/:id', isAuth, deletePiscine);

module.exports = router;
