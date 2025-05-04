import React, { useState } from 'react';
import '../styles/simulateur.css';
import { calculerPrixPiscine } from '../utils/calculDevis';
import { Form } from 'react-bootstrap';

const FormulairePiscine = ({ setDevis,handleShow}) => {
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

    const devis =  calculerPrixPiscine(data);

    const dataComplet = {
      ...data,
      devis,
    };
  
    setDevis(dataComplet);
    handleShow();
  
    console.log(dataComplet);
  };
 
  

  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h2>Estimez votre devis</h2>

      <Form.Group>
           <Form.Label><strong>Emplacement :</strong></Form.Label>
           <Form.Select className="formlabel" value={emplacement} onChange={e => setEmplacement(e.target.value)}>
             <option>Hors-sol</option>
             <option>Enterrée</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Forme :</strong></Form.Label>
           <Form.Select className="formlabel"  value={forme} onChange={e => setForme(e.target.value)}>
             <option>Rectangulaire</option>
             <option>Ronde</option>
             <option>Ovale</option>
           </Form.Select>
         </Form.Group>
 
         {forme === "Ronde" ? (
           <Form.Group>
             <Form.Label><strong>Diamètre :</strong></Form.Label>
             <Form.Control className="formlabel"  type="number" value={diametre} onChange={e => setDiametre(e.target.value)} />
           </Form.Group>
         ) : (
           <>
             <Form.Group>
               <Form.Label><strong>Longueur :</strong></Form.Label>
               <Form.Control className="formlabel"   type="number" min="3" max="20" step="0.1" value={longueur} onChange={e => setLongueur(e.target.value)} />
             </Form.Group>
             <Form.Group>
               <Form.Label><strong>Largeur :</strong></Form.Label>
               <Form.Control className="formlabel"  type="number" min="2" max="10" step="0.1" value={largeur} onChange={e => setLargeur(e.target.value)} />
             </Form.Group>
           </>
         )}
 
 <Form.Group>
               <Form.Label><strong>Profondeur :</strong></Form.Label>
               <Form.Control className="formlabel"  type="number" min="0.5" max="2" step="0.1" value={profondeur} onChange={e => setProfondeur(e.target.value)} />
             </Form.Group>
         
         <Form.Group>
           <Form.Label><strong>Couleur :</strong></Form.Label>
           <Form.Select className="formlabel"  value={couleur} onChange={e => setCouleur(e.target.value)}>
             <option>Blanc</option>
             <option>Beige</option>
             <option>Bleu clair</option>
             <option>Bleu foncé</option>
             <option>Gris clair</option>
             <option>Vert</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Type de margelle :</strong></Form.Label>
           <Form.Select className="formlabel"  value={margelle} onChange={e => setMargelle(e.target.value)}>
             <option>Pas de margelle</option>
             <option>Pierre</option>
             <option>Marbre</option>
             <option>Grès</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Système de filtration :</strong></Form.Label>
           <Form.Select className="formlabel"  value={systeme} onChange={e => setSysteme(e.target.value)}>
             <option>A skimmer</option>
             <option>A débordement</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Type de filtration :</strong></Form.Label>
           <Form.Select className="formlabel"  value={filtration} onChange={e => setFiltration(e.target.value)}>
             <option>Filtre à sable</option>
             <option>Filtre à cartouche</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Type de traitement :</strong></Form.Label>
           <Form.Select className="formlabel"  value={traitement} onChange={e => setTraitement(e.target.value)}>
             <option>Chlore</option>
             <option>Brome</option>
             <option>Sel</option>
           </Form.Select>
         </Form.Group>
         
         <Form.Group>
           <Form.Label><strong>Local technique :</strong></Form.Label>
           <Form.Select className="formlabel"  value={local} onChange={e => setLocal(e.target.value)}>
             <option>Enterré</option>
             <option>Hors-sol</option>
           </Form.Select>
         </Form.Group>
 
         <Form.Group>
           <Form.Label><strong>Type de couverture :</strong></Form.Label>
           <Form.Select className="formlabel"  value={couverture} onChange={e => setCouverture(e.target.value)}>
             <option>Pas de couverture</option>
             <option>bâche</option>
             <option>Volet manuel</option>
             <option>Volet motorisé</option>
           </Form.Select>
 
         </Form.Group>
         <Form.Group>
           <Form.Label><strong>Type d'éclairage :</strong></Form.Label>
           <Form.Select className="formlabel"  value={eclairage} onChange={e => setEclairage(e.target.value)}>
             <option>Pas d'éclairage</option>
             <option>LEDS blancs</option>
             <option>LEDS colorés</option>
           </Form.Select>
         </Form.Group>
<div className="Buttoncontainer">
    <button className="buttonprincipal" type="submit">Obtenir le devis</button>
      </div>
    </form>
  );
};

export default FormulairePiscine;
