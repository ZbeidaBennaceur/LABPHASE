 export const normaliserNom = (texte) => {
    const map = {
      "Bleu clair": "bleuclair",
      "Bleu lagune": "bleufonce",
      "Gris clair": "gris",
      "Grès": "gres",
      "Marbre": "marbre",
      "Ovale": "ovale",
      "Pierre": "pierre",
      "A skimmer":"skimmer",
      "A débordement":"debordement",
      "Filtre à sable":"sable",
      "Filtre à cartouche":"cartouche",
      "Hors-sol":"horssol",
      "Enterré":"enterre"
    };
   const clean = map[texte] || texte;

    return clean
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");
  };

 export const genererNomImage = (forme, margelle, couleur) => {
    const f = normaliserNom(forme);
    const m = normaliserNom(margelle);
    const c = normaliserNom(couleur);
    return `${f}_${m}_${c}.png`;
  };

 export const genererNomForme = (forme) => { return `${normaliserNom(forme)}.png` };

 export const genererNomFormeCouleur = (forme, couleur) => {
    const f = normaliserNom(forme);
    const c = normaliserNom(couleur);
    return `${f}_${c}.png`;
  };

export  const genererColRvt = (couleur) => { return `${normaliserNom(couleur)}.png` };

export  const genererMargRvt = (margelle) => { return `${normaliserNom(margelle)}.png` };

export const genererNomSysteme=(systeme)=>{return `${normaliserNom(systeme)}.png`}

export const genererNomFiltration=(filtration)=>{return `${normaliserNom(filtration)}.png` }


export const genererNomLocal=(local)=>{return `${normaliserNom(local)}.png`}