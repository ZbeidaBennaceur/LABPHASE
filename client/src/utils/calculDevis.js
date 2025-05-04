
export const calculerPrixPiscine = (data) => {
    let prixDevis = 0;
    let surfacePiscine = 0;
    let perimetrePiscine = 0;
    let prixProfondeur = 0;
  
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
  
    prixDevis = surfacePiscine * data.profondeur * 900;
    prixDevis += surfacePiscine * 250;
    prixDevis += data.profondeur * perimetrePiscine * 250;
  
    if (data.systeme === "Skimmer") {
      prixDevis += 1500;
    } else {
      prixDevis += 3000;
    }
  
    if (data.margelle === "Pierre") {
      prixDevis += perimetrePiscine * 100;
    } else if (data.margelle === "Marbre") {
      prixDevis += perimetrePiscine * 200;
    } else if (data.margelle === "Grès") {
      prixDevis += perimetrePiscine * 180;
    }
  
    if (data.filtration === "Filtre à sable") {
      prixDevis += 600;
    } else {
      prixDevis += 800;
    }
  
    if (data.traitement === "Sel" || data.traitement === "Chlore") {
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
  
    if (data.emplacement === "Enterrée") {
      prixDevis += 1500;
    }
  
    prixProfondeur = data.profondeur * 200;
    prixDevis += prixProfondeur;
  
    return Math.round(prixDevis * 5) / 5;
  };
  