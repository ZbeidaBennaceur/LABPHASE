const Piscine = require('../model/Piscine');
const mongoose = require('mongoose');



exports.createPiscine = async (req, res) => {
  try {
    console.log("✅ Route createPiscine appelée");
  //  console.log(req.headers['content-type']);
   // console.log(req.file);
 //  console.log("REQUÊTE REÇUE",req.body);
  // console.log("✅ Route createPiscine appelée")
 
    const {
      forme,
      longueur,
      largeur,
      diametre,
      profondeur,
      systeme,
      couleur,
      margelle,
      filtration,
      traitement,
      local,
      couverture,
      eclairage,
      devis,
      nomImage,
    } = req.body;
    
    const newPiscine = new Piscine({
      forme,
      longueur: parseFloat(longueur),
      largeur: parseFloat(largeur),
      diametre: forme === 'Ronde' ? parseFloat(diametre) : undefined,
      profondeur: parseFloat(profondeur),
      systeme,
      couleur,
      margelle,
      filtration,
      traitement,
      local,
      couverture,
      eclairage,
      nomImage,
      devis: parseFloat(devis),
      pdfUrl: req.file ? `/uploads/piscines/${req.file.filename}` : null,
      user: req.user.id,
     userName: req.user.name,
    });

    await newPiscine.save();
    res.status(200).json({msg:"Ajout avec succès",newPiscine});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


exports.getPiscineByUser = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.id);

 // console.log(userId)
  try {
    const MyPiscines = await Piscine.find({ user: userId });
    console.log("Devis trouvés :", MyPiscines);


    res.status(200).json({ msg: "Liste récupérée", MyPiscines });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getAllpiscines=async(req,res)=>{
  try{
    const Allpiscines=await Piscine.find();
    res.status(200).json({ msg: "Liste récupérée", Allpiscines });
  } catch (error) {
  res.status(400).json({ msg: error.message });
}
}



exports.editPiscine = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
//console.log("Utilisateur connecté", req.user);
    const piscine = await Piscine.findById(id);
    //console.log("Créateur du devis", piscine.user);
    if (!piscine) {
      return res.status(404).json({ msg: "Piscine non trouvée" });
    }

   if (!piscine.user.equals(req.user.id)) {
  return res.status(403).json({ msg: "Vous n'avez pas le droit d'éditer ce devis" });
}
//console.log("Mise a jour:",updates);
    const piscineUpdated = await Piscine.findByIdAndUpdate(id, updates, { new: true,  runValidators: true });
//console.log("Nouvelle piscine enregistrée :", piscineUpdated);

    res.status(200).json({ msg: "Piscine éditée avec succès", piscine: piscineUpdated });
  } catch (error) {
   console.error("Erreur Mongoose :", error)
    res.status(400).json(error);
  }
};

exports.deletePiscine = async (req, res) => {
  try {
    const { id } = req.params;

    const piscine = await Piscine.findById(id);
    if (!piscine) {
      return res.status(404).json({ msg: "Piscine non trouvée" });
    }

    if (!piscine.user.equals(req.user.id)) {
  console.warn("Utilisateur non autorisé à supprimer ce devis");
  console.log("Utilisateur :", req.user.id);
  console.log("Créateur :", piscine.user);
  return res.status(403).json({ msg: "Vous n'avez pas le droit de supprimer ce devis" });
}

    await Piscine.findByIdAndDelete(id);

    return res.status(200).json({ msg: "Piscine supprimée avec succès", piscine });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};