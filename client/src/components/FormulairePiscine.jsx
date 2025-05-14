import React, { useState, useEffect } from 'react';
import '../styles/simulateur.css';
import { calculerPrixPiscine } from '../utils/calculDevis';
import { genererNomImage, genererColRvt, genererNomFormeCouleur, genererNomForme, genererNomSysteme, genererNomFiltration,genererNomLocal,genererMargRvt } from '../utils/normaliserNomImage';
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

useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [etape]);


  const renderEtape = () => {

    switch (etape) {
      case 1:
        return (
          <>
            <div className="form-container-etape d-flex">
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Forme :</strong></Form.Label>
                  <Form.Select className="formlabel" value={forme} onChange={e => setForme(e.target.value)}>
                    <option>Rectangulaire</option>
                    <option>Ronde</option>
                    <option>Ovale</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="image-col text-center">
                <img
                  src={`/Images/choix_piscine/forme/${genererNomForme(forme)}`}
                  alt={`Piscine ${forme}`}
                  className="image-forme"
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-container-etape d-flex">
              <div className="form-col">

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
              <div className="image-col text-center">
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
            <div className="form-container-etape d-flex">
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Couleur du revêtement :</strong></Form.Label>
                  <Form.Select className="formlabel" value={couleur} onChange={e => setCouleur(e.target.value)}>
                    <option>Bleu clair</option>
                    <option>Bleu lagune</option>
                    <option>Gris clair</option>
                    <option>Blanc</option>
                  </Form.Select>

                  <div className="texture-preview">
                    <h6 className="texture-title">Texture du fond de la piscine :</h6>
                    <img
                      className="zoomImg text-center"
                      src={`/Images/choix_piscine/revetement_fond/${genererColRvt(couleur)}`}
                      alt={`Piscine ${couleur}`}
                    />
                  </div>
                </Form.Group>
              </div>

              <div className="image-col text-center">
                <img
                  className="image-forme"
                  src={`/Images/choix_piscine/couleur/${genererNomFormeCouleur(forme, couleur)}`}
                  alt={`Piscine ${forme} ${couleur}`}
                />
              </div>
            </div>
          </>
        );

         case 4:
        return (

          <>
            <div className="form-container-etape d-flex">
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Type de margelle :</strong></Form.Label>
                  <Form.Select className="formlabel" value={margelle} onChange={e => setMargelle(e.target.value)}>
                    <option>Pierre</option>
                    <option>Marbre</option>
                    <option>Grès</option>
                  </Form.Select>
                </Form.Group>
                <div className="texture-preview">
                    <h6 className="texture-title">Texture de la margelle :</h6>
                    <img
                      className="zoomImg text-center"
                      src={`/Images/choix_piscine/revetement_margelle/${genererMargRvt(margelle)}`}
                      alt={`Margelle en ${margelle}`}
                    />
                  </div>
              </div>


              <div className="image-col text-center">
                <img
                  className="image-forme"
                  src={`/Images/choix_piscine/${genererNomImage(forme,margelle, couleur)}`}
                  alt={`Piscine ${forme} ${couleur}, margelle en ${margelle}`}
                />
              </div>
            </div>
          </>
        );
      case 5:
        return (
   <>
   <div className="image-forme-recap-container">
    <h6 className="image-recap-text">Votre piscine</h6>
     <img
                  className="image-forme-recap"
                  src={`/Images/choix_piscine/${genererNomImage(forme,margelle, couleur)}`}
                  alt={`Piscine ${forme} ${couleur}, margelle en ${margelle}`}
                />
   </div>
     <div className="form-container-etape d-flex" style={{marginBottom:"2rem"}}>
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Système de filtration :</strong></Form.Label>
                  <Form.Select className="formlabel" value={systeme} onChange={e => setSysteme(e.target.value)}>
                    <option>A skimmer</option>
                    <option>A débordement</option>
                  </Form.Select>
                   <>
                      {systeme === "A skimmer" ? (<Form.Text><strong>Le système à skimmer </strong>utilise des ouvertures sur les parois pour aspirer l’eau en surface. C’est le plus courant dans les piscines privées, simple à installer et économique.</Form.Text>

                      ) : (<Form.Text><strong>Le système à débordement</strong> fait circuler l’eau en la faisant déborder sur les bords. Il assure une filtration plus homogène et une ligne d’eau parfaitement plate, idéale pour les piscines haut de gamme.</Form.Text>)}
                    </>

                </Form.Group>
              </div>
              <div className="image-col text-center">
                <img className="image-forme"
                  src={`/Images/choix_piscine/systeme/${genererNomSysteme(systeme)}`}
                  alt={`Piscine à ${systeme}`}
                />
              </div>
            </div>

  <div className="form-container-etape d-flex" style={{marginBottom:"2rem"}}>
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Type de filtration :</strong></Form.Label>
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
              </div>
              <div className="image-col text-center">
                <img className="image-forme"
                  src={`/Images/choix_piscine/filtration/${genererNomFiltration(filtration)}`}
                  alt={`Filtre à ${filtration}`}
                />
              </div>
            </div>
 <div className="form-container-etape d-flex" style={{marginBottom:"2rem"}}>
              <div >
                <Form.Group>
                  <Form.Label><strong>Type de traitement :</strong></Form.Label>
                  <Form.Select className="formlabel" value={traitement} onChange={e => setTraitement(e.target.value)}>
                   <option>Chlore</option>
                    <option>Brome</option>
                    <option>Sel</option>
                  </Form.Select>
                  <>
                    {traitement === "Chlore" ? (
                      <Form.Text><strong>Le chlore</strong> est efficace et économique, c'est le traitement le plus utilisé, bien qu'il puisse être irritant pour la peau et les yeux.</Form.Text>

                    ) : traitement === "Brome" ? (
                      <Form.Text><strong>Le brome</strong> est plus doux et sans odeur, idéal pour les peaux sensibles, mais un peu plus coûteux.</Form.Text>
                    ) : (
                      <Form.Text> <strong>Le traitement au sel</strong> utilise un électrolyseur pour produire un chlore naturel. Confortable, mais nécessite un équipement spécifique. Il est moins cher que le Brome et plus cher que le Chlore.
                      </Form.Text>
                    )}
                  </>
                </Form.Group>
              </div>
              
            </div>
           
          </>

        );
      case 6:
        return (
          <>
          <div className="image-forme-recap-container">
    <h6 className="image-recap-text">Votre piscine</h6>
     <img
                  className="image-forme-recap"
                  src={`/Images/choix_piscine/${genererNomImage(forme,margelle, couleur)}`}
                  alt={`Piscine ${forme} ${couleur}, margelle en ${margelle}`}
                />
   </div>
            <div className="form-container-etape d-flex">
              <div className="form-col">
                <Form.Group>
                  <Form.Label><strong>Local technique :</strong></Form.Label>
                  <Form.Select className="formlabel" value={local} onChange={e => setLocal(e.target.value)}>
                    <option>Enterré</option>
                    <option>Hors-sol</option>
                  </Form.Select>
                  {local === "Hors-sol" ? (
                      <Form.Text>Le local <strong> hors-sol </strong>est installé à côté de la piscine, en surface. Moins cher que le local enterré,
il est également facile d’accès et rapide à installer. Il peut toutefois être visible et occuper de la place au sol, mais facilement intégré au reste de votre jardin.
<br/><strong>Encombrement : </strong>nécessite un espace libre autour du bassin (au moins 1 m²).</Form.Text>

                    ) :(
                      <Form.Text>Le local <strong> enterré  </strong>est dissimulé dans le sol, souvent sous une trappe.
Esthétique et mieux protégé, il demande des travaux plus lourds et peut être moins accessible pour l’entretien.
<br/><strong>Encombrement : </strong>faible en surface, mais nécessite un terrassement d’environ 1 m³.</Form.Text>)

                  }
                </Form.Group>
              </div>
              <div className="image-col text-center">
                <img className="image-forme"
                  src={`/Images/choix_piscine/local/${genererNomLocal(local)}`}
                  alt={`Local ${local}`}
                />
              </div>
              </div>
          </>

        );
      case 7:
        return (
         <>
  <div className="image-forme-recap-container">
    <h6 className="image-recap-text">Votre piscine</h6>
    <img
      className="image-forme-recap"
      src={`/Images/choix_piscine/${genererNomImage(forme, margelle, couleur)}`}
      alt={`Piscine ${forme} ${couleur}, margelle en ${margelle}`}
    />
  </div>

  <Form.Group className="form-container-etape">
    <Form.Label><strong>Type de couverture :</strong></Form.Label>
    {forme === "Ronde" ? (
      <Form.Select className="formlabel" value={couverture} onChange={e => setCouverture(e.target.value)}>
        <option>Pas de couverture</option>
        <option>Bâche</option>
      </Form.Select>
    ) : (
      <Form.Select className="formlabel" value={couverture} onChange={e => setCouverture(e.target.value)}>
        <option>Pas de couverture</option>
        <option>Bâche</option>
        <option>Volet manuel</option>
        <option>Volet motorisé</option>
      </Form.Select>
    )}
  </Form.Group>


  <div style={{ marginTop: '10px' }}>
    {couverture === "Bâche" && (
      <Form.Text>
        La <strong>bâche de sécurité</strong> est une couverture souple fixée à l’aide de sangles ou de pitons tout autour de la piscine. Elle répond aux normes de sécurité en empêchant l’accès accidentel au bassin, notamment pour les enfants ou les animaux. Elle protège également l’eau des feuilles et saletés, mais demande un peu plus de temps et d’effort pour l’installation. Elle est idéale pour une utilisation saisonnière ou en hivernage.
      </Form.Text>
    )}

    {couverture === "Volet manuel" && (
      <Form.Text>
        Le <strong>volet roulant manuel</strong> est une couverture rigide composée de lames en PVC ou en polycarbonate, qui s’enroule à l’aide d’une manivelle. Il assure une bonne sécurité pour empêcher l’accès au bassin, tout en limitant l’évaporation de l’eau et en conservant sa chaleur. C’est une solution pratique et économique, bien qu’elle nécessite une intervention manuelle à chaque utilisation.
      </Form.Text>
    )}

    {couverture === "Volet motorisé" && (
      <Form.Text>
        Le <strong>volet roulant motorisé</strong> est une version automatisée du volet rigide, actionné par un moteur électrique. Il offre un grand confort d’utilisation grâce à l’ouverture et la fermeture sans effort. Il garantit une sécurité maximale tout en étant discret et esthétique. Plus onéreux, il constitue une solution haut de gamme, durable et valorisante pour la piscine.
      </Form.Text>
    )}
  </div>
</>
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
      <h2 className="form-title">Estimez votre devis</h2>

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
            onClick={(



              
            ) => 
             { if (etape===2 &&
(
(forme==="Ronde" && diametre.length === 0) ||
(forme===!"Ronde" && (largeur.length === 0 || longueur.length === 0)) ||
profondeur.length === 0
)           
){alert("Merci de remplir toutes les dimensions");
  return;
}    
              setEtape(etape + 1)}}
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