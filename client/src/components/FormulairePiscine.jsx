import React, { useState } from 'react';
import '../styles/simulateur.css';

const FormulairePiscine = ({ setDevis,handleShow }) => {
    //console.log(setDevis);
  const [emplacement, setEmplacement] = useState("Hors-sol");
  const [forme, setForme] = useState("Rectangulaire");
  const [longueur, setLongueur] = useState('');
  const [largeur, setLargeur] = useState('');
  const [diametre, setDiametre] = useState('');
  const [profondeur, setProfondeur] = useState('');
  const [systeme, setSysteme] = useState('Skimmer');
  const [couleur, setCouleur] = useState('Blanc');
  const [margelle, setMargelle] = useState('Pas de margelle');
  const [filtration, setFiltration] = useState('Filtre à sable');
  const [traitement, setTraitement] = useState('Chlore');
  const [local, setLocal] = useState('Coffret hors sol');
  const [couverture, setCouverture] = useState('Pas de couverture');
  const [eclairage, setEclairage] = useState("Pas d'éclairage");

  const calculerDevis = (data) => {
    let prixDevis = 0;
    let surfacePiscine = 0;
    let perimetrePiscine = 0;
    let prixProfondeur=0;
  

    if (data.forme === "Rectangulaire") {
      surfacePiscine = data.longueur * data.largeur;
      perimetrePiscine = 2 * (data.longueur + data.largeur);
    } else if (data.forme === "Ovale") {
      const rayon1 = data.longueur / 2;
      const rayon2 = data.largeur / 2;
      surfacePiscine = Math.PI * rayon1 * rayon2;
      perimetrePiscine = Math.PI * (3 * (rayon1 + rayon2) - Math.sqrt((3 * rayon1 + rayon2) * (rayon1 + 3 * rayon2)));
    } else {
      const rayon = data.diametre / 2;
      surfacePiscine = Math.PI * Math.pow(rayon, 2);
      perimetrePiscine = 2 * Math.PI * rayon;
    }

    prixDevis = surfacePiscine * data.profondeur * 900; //calcul du prix de base selon le volume
    prixDevis+=surfacePiscine*250 //calcul du revetement au sol
    prixDevis+=data.profondeur*perimetrePiscine*250 //calcul du revetement mural

    if (data.systeme === "Skimmer") {
      prixDevis += 1500;
    } else {
      prixDevis += 3000;
    }

    if (data.margelle === "Pierre") {
      prixDevis += perimetrePiscine * 100;
    } else if (data.margelle === "Marbre") {
      prixDevis += perimetrePiscine * 200;
    }
    else if (data.margelle === "Grès") {
      prixDevis += perimetrePiscine * 180;
    }

    if (data.filtration === "Filtre à sable") {
      prixDevis += 600;
    } else {
      prixDevis += 800;
    }

    if (data.traitement  === "Sel" || data.traitement==="Chlore") {
      prixDevis += 200;
    } else if (data.traitement === "Brome") {
      prixDevis += 600;
    }

    if (data.local === "Coffret enterré") {
      prixDevis += 3000;
    } else {
      prixDevis += 1000;
    }

    if (data.couverture === "Bâche") {
      prixDevis += 100 * surfacePiscine;
    } else if (data.couverture === "Volet manuel") {
      prixDevis += 300 * surfacePiscine;
    } else if (data.couverture === "Volet motorisé") {
      prixDevis += 500 * surfacePiscine;
    }

    if (data.eclairage === "LED blancs") {
      prixDevis += 30 * perimetrePiscine;
    } else if (data.eclairage === "LED colorés") {
      prixDevis += 50 * perimetrePiscine;
    }
    if (data.emplacement==="Enterrée"){prixDevis+=1500}

 prixProfondeur=data.profondeur*200
 prixDevis+=prixProfondeur




    return Math.round(prixDevis*5)/5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (forme === 'Ronde' && !diametre) ||
      ((forme === 'Rectangulaire' || forme === 'Ovale') && (!longueur || !largeur)) ||
      !profondeur
    ) {
      alert("Merci de remplir toutes les dimensions !");
      return;
    }

    const data = {
      emplacement,
      forme,
      longueur: Number(longueur),
      largeur: Number(largeur),
      diametre: forme === 'Ronde' ? Number(diametre) : null,
      profondeur: Number(profondeur),
      systeme,
      couleur,
      margelle,
      filtration,
      traitement,
      local,
      couverture,
      eclairage,
    };

    const devis = calculerDevis(data);
    setDevis(devis);
    handleShow();
  console.log("Devis Calculé: ", devis);
  };

  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h2>Estimez votre devis</h2>

      <label className="form-group">Emplacement:</label>
      <select value={emplacement} onChange={(e) => setEmplacement(e.target.value)}>
        <option value="Hors-sol">Hors-sol</option>
        <option value="Enterrée">Enterrée</option>
      </select>

      <label className="form-group">Forme:</label>
      <select value={forme} onChange={(e) => setForme(e.target.value)}>
        <option value="Rectangulaire">Rectangulaire</option>
        <option value="Ronde">Ronde</option>
        <option value="Ovale">Ovale</option>
      </select>

      {forme === 'Ronde' && (
        <>
          <label className="form-group">Diamètre:</label>
          <input
            type="number"
            value={diametre}
            onChange={(e) => setDiametre(e.target.value)}
            step="0.1"
            min="2"
            required
          />
        </>
      )}

      {(forme === 'Rectangulaire' || forme === 'Ovale') && (
        <>
          <label className="form-group">Longueur:</label>
          <input
            type="number"
            value={longueur}
            onChange={(e) => setLongueur(e.target.value)}
            step="0.1"
            min="3"
            max="20"
            required
          />
          <label className="form-group">Largeur:</label>
          <input
            type="number"
            value={largeur}
            onChange={(e) => setLargeur(e.target.value)}
            step="0.1"
            min="2"
            max="10"
            required
          />
        </>
      )}

      <label className="form-group">Profondeur:</label>
      <input
        type="number"
        value={profondeur}
        onChange={(e) => setProfondeur(e.target.value)}
        step="0.1"
        min="0.5"
        max="2"
        required
      />

      <label className="form-group">Couleur:</label>
      <select value={couleur} onChange={(e) => setCouleur(e.target.value)}>
        <option value="Blanc">Blanc</option>
        <option value="Beige">Beige</option>
        <option value="Bleu clair">Bleu clair</option>
        <option value="Gris clair">Gris clair</option>
        <option value="Bleu foncé">Bleu foncé</option>
        <option value="Vert">Vert</option>
      </select>

      <label className="form-group">Margelle:</label>
      <select value={margelle} onChange={(e) => setMargelle(e.target.value)}>
        <option value="Pas de margelle">Pas de margelle</option>
        <option value="Pierre">Pierre</option>
        <option value="Marbre">Marbre</option>
        <option value="Grès">Grès</option>
      </select>

      <label className="form-group">Système:</label>
      <select value={systeme} onChange={(e) => setSysteme(e.target.value)}>
        <option value="Skimmer">Skimmer</option>
        <option value="Débordement">Débordement</option>
      </select>

      
      
      <label className="form-group">Filtration:</label>
      <select value={filtration} onChange={(e) => setFiltration(e.target.value)}>
        <option value="Filtre à sable">Filtre à sable</option>
        <option value="Filtre à cartouche">Filtre à cartouche</option>
      </select>

      <label className="form-group">Traitement:</label>
      <select value={traitement} onChange={(e) => setTraitement(e.target.value)}>
        <option value="Chlore">Chlore</option>
        <option value="Brome">Brome</option>
        <option value="Sel">Sel</option>
      </select>

      <label className="form-group">Local technique:</label>
      <select value={local} onChange={(e) => setLocal(e.target.value)}>
        <option value="Coffret hors sol">Coffret hors sol</option>
        <option value="Coffret enterré">Coffret enterré</option>
      </select>

      <label className="form-group">Couverture:</label>
      <select value={couverture} onChange={(e) => setCouverture(e.target.value)}>
      <option value="Pas de couverture">Pas de couverture</option>
        <option value="Bâche">Bâche</option>
        <option value="Volet manuel">Volet manuel</option>
        <option value="Volet motorisé">Volet motorisé</option>
      </select>

      <label className="form-group">Éclairage:</label>
      <select value={eclairage} onChange={(e) => setEclairage(e.target.value)}>
        <option value="Pas d'éclairage">Pas d'éclairage</option>
        <option value="LED blancs">LED blancs</option>
        <option value="LED colorés">LED colorés</option>
      </select>
<div className="Buttoncontainer">
      <button className="buttonprincipal" type="submit">Obtenir le devis</button>
      </div>
    </form>
  );
};

export default FormulairePiscine;
