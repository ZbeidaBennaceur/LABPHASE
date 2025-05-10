const mongoose = require('mongoose');

const piscineSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    forme: {
      type: String,
      required: true,
      enum: ['Rectangulaire', 'Ronde', 'Ovale'],
    },

    longueur: {
      type: Number,
      default: null,
      validate: {
        validator: function (v) {
          if (this.forme === 'Rectangulaire' || this.forme === 'Ovale') {
            return v !== null && v >= 3 && v <= 20;
          }
          return true;
        },
        message: 'La longueur doit être entre 3m et 20m pour les formes Rectangulaire ou Ovale',
      },
    },

    largeur: {
      type: Number,
      default: null,
      validate: {
        validator: function (v) {
          if (this.forme === 'Rectangulaire' || this.forme === 'Ovale') {
            return v !== null && v >= 2 && v <= 10;
          }
          return true;
        },
        message: 'La largeur doit être entre 2m et 10m pour les formes Rectangulaire ou Ovale',
      },
    },

    diametre: {
  type: Number,
  required: false,
  default: null,
  validate: {
    validator: function (v) {
      if (this.forme === 'Ronde') {
        return typeof v === 'number' && v >= 2 && v <= 10;
      }
      return v === null; // s'assure que les autres formes ne reçoivent pas un nombre
    },
    message: 'Le diamètre est requis entre 2m et 10m pour la forme Ronde, et doit être null sinon',
  },
},

    profondeur: {
      type: Number,
      required: true,
      min: [0.5, 'La profondeur doit être supérieure à 0.5m'],
      max: [2, 'La profondeur ne peut pas dépasser 2m'],
    },

    couleur: {
      type: String,
      required: true,
      enum: ['Blanc', 'Bleu clair', 'Bleu lagune', 'Gris clair'],
    },

    margelle: {
      type: String,
      required: true,
      enum: ['Pierre', 'Marbre', 'Grès'],
    },

    systeme: {
      type: String,
      required: true,
      enum: ['A skimmer', 'A débordement'],
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
      enum: ['Enterré', 'Hors-sol'],
    },

    couverture: {
      type: String,
      required: true,
      enum: ['Pas de couverture', 'bâche', 'Volet manuel', 'Volet motorisé'],
      default: 'Pas de couverture',
    },

    eclairage: {
      type: String,
      required: true,
      enum: ['Pas d\'éclairage', 'LEDS blancs', 'LEDS colorés'],
      default: 'Pas d\'éclairage',
    },

    nomImage: {
      type: String,
      default: null,
    },

    pdfUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Piscine = mongoose.model('Piscine', piscineSchema);
module.exports = Piscine;
