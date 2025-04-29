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
    res.status(200).json(newPiscine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPiscineByUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const piscines = await Piscine.find({ user: userId });

    if (piscines.length === 0) {
      return res.status(404).json({ message: "Aucun devis de piscine trouvé pour cet utilisateur" });
    }

    res.status(200).json(piscines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


