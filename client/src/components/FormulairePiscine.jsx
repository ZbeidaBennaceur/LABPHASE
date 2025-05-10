import React, { useState } from 'react';
import '../styles/simulateur.css';
import { calculerPrixPiscine } from '../utils/calculDevis';
import { Form } from 'react-bootstrap';

const FormulairePiscine = ({ onSubmit }) => {
  const [etape, setEtape] = useState(1);

  const [forme, setForme] = useState("Rectangulaire");
  const [longueur, setLongueur] = useState('');
  const [largeur, setLargeur] = useState('');
  const [diametre, setDiametre] = useState('');
  const [profondeur, setProfondeur] = useState('');
  const [systeme, setSysteme] = useState('A skimmer');
  const [couleur, setCouleur] = useState('Bleu clair');
  const [margelle, setMargelle] = useState('Pierre');
  const [filtration, setFiltration] = useState('Filtre à sable');
  const [traitement, setTraitement] = useState('Chlore');
  const [local, setLocal] = useState('Hors-sol');
  const [couverture, setCouverture] = useState('Pas de couverture');
  const [eclairage, setEclairage] = useState("Pas d'éclairage");

  const normaliserNom = (texte) => {
    const map = {
      "Bleu clair": "bleuclair",
      "Bleu lagune": "bleufonce",
      "Gris clair": "gris",
      "Grès": "gres",
      "Marbre": "marbre",
      "Ovale": "ovale",
      "Pierre": "pierre"
    };
    const clean = map[texte] || texte;

    return clean
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");
  };

  const genererNomImage = (forme, margelle, couleur) => {
    const f = normaliserNom(forme);
    const m = normaliserNom(margelle);
    const c = normaliserNom(couleur);
    return `${f}_${m}_${c}.png`;
  };

  const genererNomForme = (forme) => { return `${normaliserNom(forme)}.png` };

  const genererNomFormeCouleur = (forme, couleur) => {
    const f = normaliserNom(forme);
    const c = normaliserNom(couleur);
    return `${f}_${c}.png`;
  };

  const genererColRvt = (couleur) => { return `${normaliserNom(couleur)}.png` };







  const handleKeyDown = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit déclenché");
    e.preventDefault();


    const data = {
      forme,
      longueur: Number(longueur),
      largeur: Number(largeur),
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

    if (forme === "Ronde") {
      data.diametre = Number(diametre);
    }


    const baseCalcul = { ...data };
    if (forme !== "Ronde") {
      delete baseCalcul.diametre;
    }

    data.nomImage = genererNomImage(forme, margelle, couleur);
    data.devis = calculerPrixPiscine(baseCalcul);

    onSubmit(data);
  };

  const renderEtape = () => {

    switch (etape) {
      case 1:
        return (
          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4">

                <Form.Group>
                  <Form.Label><strong>Forme :</strong></Form.Label>
                  <Form.Select className="formlabel" value={forme} onChange={e => setForme(e.target.value)}>
                    <option>Rectangulaire</option>
                    <option>Ronde</option>
                    <option>Ovale</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/forme/${genererNomForme(forme)}`}
                  alt={`Piscine ${forme}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4">

                {forme === "Ronde" ? (
                  <Form.Group>
                    <Form.Label><strong>Diamètre :</strong></Form.Label>
                    <Form.Control
                      className="formlabel"
                      type="number"
                      min="2"
                      max="10"
                      step="0.1"
                      value={diametre}
                      onChange={e => setDiametre(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </Form.Group>
                ) : (
                  <>
                    <Form.Group>
                      <Form.Label><strong>Longueur :</strong></Form.Label>
                      <Form.Control
                        className="formlabel"
                        type="number"
                        min="3"
                        max="20"
                        step="0.1"
                        value={longueur}
                        onChange={e => setLongueur(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label><strong>Largeur :</strong></Form.Label>
                      <Form.Control
                        className="formlabel"
                        type="number"
                        min="2"
                        max="10"
                        step="0.1"
                        value={largeur}
                        onChange={e => setLargeur(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </Form.Group>
                  </>
                )}
                <Form.Group>
                  <Form.Label><strong>Profondeur :</strong></Form.Label>
                  <Form.Control
                    className="formlabel"
                    type="number"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={profondeur}
                    onChange={e => setProfondeur(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/forme/${genererNomForme(forme)}`}
                  alt={`Piscine ${forme}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (

          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4" >
                <Form.Group>
                  <Form.Label><strong>Couleur :</strong></Form.Label>
                  <Form.Select className="formlabel" value={couleur} onChange={e => setCouleur(e.target.value)}>
                    <option>Bleu clair</option>
                    <option>Bleu lagune</option>
                    <option>Gris clair</option>
                    <option>Blanc</option>
                  </Form.Select>
                  <div style={{ marginTop: "2rem" }} >
                    <h6 style={{ textAlign: "center" }}>Texture du fond de la piscine:</h6>
                    <img className="d-block mx-auto zoomImg"
                      src={`/Images/choix_piscine/revetement_fond/${genererColRvt(couleur)}`}
                      alt={`Piscine ${couleur}`}
                      style={{ width: "35%", borderRadius: "0.5rem", marginTop: "1.8rem" }}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/couleur/${genererNomFormeCouleur(forme, couleur)}`}
                  alt={`Piscine ${forme} ${couleur}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />

              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4">
                <Form.Group>
                  <Form.Label><strong>Type de margelle :</strong></Form.Label>
                  <Form.Select className="formlabel" value={margelle} onChange={e => setMargelle(e.target.value)}>
                    <option>Pierre</option>
                    <option>Marbre</option>
                    <option>Grès</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/${genererNomImage(forme, margelle, couleur)}`}
                  alt={`Piscine ${forme} ${margelle} ${couleur}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </>
        );
      case 5:
        return (

          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4">
                <Form.Group>
                  <Form.Label><strong>Système de filtration :</strong></Form.Label>
                  <Form.Text>Le système de filtration est un élément essentiel de toute piscine, car il permet de maintenir une eau claire, propre et saine en éliminant les impuretés.</Form.Text>
                  <Form.Select style={{ marginTop: "1rem" }} className="formlabel" value={systeme} onChange={e => setSysteme(e.target.value)}>
                    <option>A skimmer</option>
                    <option>A débordement</option>
                  </Form.Select>
                  <>
                    {systeme === "A skimmer" ? (<Form.Text><strong>Le système à skimmer </strong>utilise des ouvertures sur les parois pour aspirer l’eau en surface. C’est le plus courant dans les piscines privées, simple à installer et économique.</Form.Text>

                    ) : (<Form.Text><strong>Le système à débordement</strong> fait circuler l’eau en la faisant déborder sur les bords. Il assure une filtration plus homogène et une ligne d’eau parfaitement plate, idéale pour les piscines haut de gamme.</Form.Text>)}
                  </>
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ marginTop: "2rem" }}><strong>Type de filtration :</strong></Form.Label>
                  <Form.Select className="formlabel" value={filtration} onChange={e => setFiltration(e.target.value)}>
                    <option>Filtre à sable</option>
                    <option>Filtre à cartouche</option>
                  </Form.Select>
                   <>
                    {filtration === "Filtre à sable" ? (<Form.Text><strong>Le filtre à sable </strong>est le plus utilisé : l’eau traverse un lit de sable qui retient les impuretés. Il est robuste, économique et facile à entretenir.</Form.Text>

                    ) : (<Form.Text><strong>Le filtre à cartouche</strong> offre une finesse de filtration supérieure. Compact et simple à installer, il nécessite un nettoyage plus régulier.
    </Form.Text>)}
                  </>
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ marginTop: "2rem" }}><strong>Type de traitement :</strong></Form.Label>
                  <Form.Select className="formlabel" value={traitement} onChange={e => setTraitement(e.target.value)}>
                    <option>Chlore</option>
                    <option>Brome</option>
                    <option>Sel</option>
                  </Form.Select>
                  <>
                   {traitement==="Chlore"?(
                  <Form.Text><strong>Le chlore</strong> est efficace et économique, c'est le traitement le plus utilisé, bien qu'il puisse être irritant pour la peau et les yeux.</Form.Text>  
                  
                   ):traitement==="Brome"?(
                    <Form.Text><strong>Le brome</strong> est plus doux et sans odeur, idéal pour les peaux sensibles, mais un peu plus coûteux.</Form.Text>
                   ):(
<Form.Text> <strong>Le traitement au sel</strong> utilise un électrolyseur pour produire un chlore naturel. Confortable, mais nécessite un équipement spécifique. Il est moins cher que le Brome et plus cher que le Chlore.
  </Form.Text>
                  )}
                  </>
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/${genererNomImage(forme, margelle, couleur)}`}
                  alt={`Piscine ${forme} ${margelle} ${couleur}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </>

        );
      case 6:
        return (
          <>
            <div className="d-flex" style={{ height: "100%", width: "100%" }}>
              <div className="w-50 pe-4">
                <Form.Group>
                  <Form.Label><strong>Local technique :</strong></Form.Label>
                  <Form.Select className="formlabel" value={local} onChange={e => setLocal(e.target.value)}>
                    <option>Enterré</option>
                    <option>Hors-sol</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="w-50 text-center">
                <img
                  src={`/Images/choix_piscine/${genererNomImage(forme, margelle, couleur)}`}
                  alt={`Piscine ${forme} ${margelle} ${couleur}`}
                  style={{ width: "90%", borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </>

        );
      case 7:
        return (
          <Form.Group>
            <Form.Label><strong>Type de couverture :</strong></Form.Label>
            <Form.Select className="formlabel" value={couverture} onChange={e => setCouverture(e.target.value)}>
              <option>Pas de couverture</option>
              <option>bâche</option>
              <option>Volet manuel</option>
              <option>Volet motorisé</option>
            </Form.Select>
          </Form.Group>
        );
      case 8:
        return (
          <Form.Group>
            <Form.Label><strong>Type d'éclairage :</strong></Form.Label>
            <Form.Select className="formlabel" value={eclairage} onChange={e => setEclairage(e.target.value)}>
              <option>Pas d'éclairage</option>
              <option>LEDS blancs</option>
              <option>LEDS colorés</option>
            </Form.Select>
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h2>Estimez votre devis</h2>

      {renderEtape()}

      <div className="Buttoncontainer" style={{ marginTop: '20px' }}>
        {etape > 1 && (
          <button
            type="button"
            className="buttonsecondary"
            style={{ margin: "2rem" }}
            onClick={() => setEtape(etape - 1)}
          >
            Précédent
          </button>
        )}

        {etape < 8 ? (
          <button
            type="button"
            className="buttonsecondary"
            style={{ margin: "2rem" }}
            onClick={() => setEtape(etape + 1)}
          >
            Suivant
          </button>
        ) : (
          <button type="submit" className="buttongetdevis" style={{ margin: "2rem", width: "8rem" }}>
            Obtenir le devis
          </button>
        )}
      </div>
    </form>
  );
};

export default FormulairePiscine;