const mongoose = require('mongoose');

const piscineSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    emplacement: {
      type: String,
      required: true,
      enum: ['Hors-sol', 'Enterrée'],
    },
    forme: {
      type: String,
      required: true,
      enum: ['Rectangulaire', 'Ronde', 'Ovale'],
    },
    longueur: {
      type: Number,
      required: true,
      min: [3, 'La longueur doit être supérieure à 3m'],
      max: [20, 'La longueur ne peut pas dépasser 20m'],
    },
    largeur: {
      type: Number,
      required: true,
      min: [2, 'La largeur doit être supérieure à 2m'],
      max: [10, 'La largeur ne peut pas dépasser 10m'],
    },
    diametre: {
      type: Number,
      required: function () {
        return this.forme === 'Ronde'; // Diamètre nécessaire si forme est Ronde
      },
    },
    profondeur: {
      type: Number,
      required: true,
      min: [0.5, 'La profondeur doit être supérieure à 0.5m'],
      max: [2, 'La profondeur ne peut pas dépasser 2m'],
    },
    systeme: {
      type: String,
      required: true,
      enum: ['Skimmer', 'Débordement'],
    },
    couleur: {
      type: String,
      required: true,
      enum: ['Blanc', 'Beige', 'Bleu clair', 'Bleu foncé', 'Gris clair', 'Vert'],
    },
    margelle: {
      type: String,
      required: true,
      enum: ['Pas de margelle', 'Pierre', 'Marbre','Grès'],
    },

    filtration: {
      type: String,
      required: true,
      enum: ['Filtre à sable', 'Filtre à cartouche'],
    },
    traitement: {
      type: String,
      required: true,
      enum: ['Chlore', 'Brome', 'Sel'],
    },
    local: {
      type: String,
      required: true,
      enum: ['Coffret hors sol', 'Coffret enterré'],
    },
    couverture: {
      type: String,
      required: true,
      enum: ['Bâche', 'Volet manuel', 'Volet motorisé', 'Pas de couverture'],
      default: 'Pas de couverture',
    },
    eclairage: {
      type: String,
      required: true,
      enum: ['LED colorés', 'LED blancs', 'Pas d\'éclairage'],
      default: "Pas d'éclairage",
    },
  },
  { timestamps: true }
);

const Piscine = mongoose.model('Piscine', piscineSchema);
module.exports = Piscine;
