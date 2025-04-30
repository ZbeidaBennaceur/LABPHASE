const Piscine = require('../model/Piscine');

exports.createPiscine = async (req, res) => {
  try {
    const {
      emplacement, forme, longueur, largeur, diametre, profondeur,
      systeme, couleur, margelle, filtration, traitement, local, eclairage
    } = req.body;

    const newPiscine = new Piscine({
      ...req.body,
      user: req.user.id,
    });

    await newPiscine.save();
    res.status(200).json({msg:"Ajout avec succès",newPiscine});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getPiscineByUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const MyPiscines = await Piscine.find({ user: userId });

    if (MyPiscines.length === 0) {
      return res.status(404).json({ msg: "Aucun devis de piscine trouvé pour cet utilisateur" });
    }

    res.status(200).json({msg:"La liste des devis",MyPiscines});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


exports.editPiscine = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const piscine = await Piscine.findById(id);
    if (!piscine) {
      return res.status(404).json({ msg: "Piscine non trouvée" });
    }

    if (piscine.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: "Vous n'avez pas le droit d'éditer ce devis" });
    }

    const piscineUpdated = await Piscine.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({ msg: "Piscine éditée avec succès", piscine: piscineUpdated });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deletePiscine = async (req, res) => {
  try {
    const { id } = req.params;

    const piscine = await Piscine.findById(id);
    if (!piscine) {
      return res.status(404).json({ msg: "Piscine non trouvée" });
    }

    if (piscine.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: "Vous n'avez pas le droit de supprimer ce devis" });
    }

    await Piscine.findByIdAndDelete(id);

    return res.status(200).json({ msg: "Piscine supprimée avec succès", piscine });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};