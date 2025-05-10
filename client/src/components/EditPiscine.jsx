import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/forms.css';

const EditPiscine = ({ devis, handleSave, show, handleClose }) => {
  const [forme, setForme] = useState('');
  const [longueur, setLongueur] = useState('');
  const [largeur, setLargeur] = useState('');
  const [diametre, setDiametre] = useState('');
  const [profondeur, setProfondeur] = useState('');
  const [couleur, setCouleur] = useState('');
  const [margelle, setMargelle] = useState('');
  const [systeme, setSysteme] = useState('');
  const [filtration, setFiltration] = useState('');
  const [traitement, setTraitement] = useState('');
  const [local, setLocal] = useState('');
  const [couverture, setCouverture] = useState('');
  const [eclairage, setEclairage] = useState('');
//console.log(devis)
  useEffect(() => {
    if (devis) {
      setForme(devis.forme);
      setLongueur(devis.longueur);
      setLargeur(devis.largeur);
      setDiametre(devis.diametre);
      setProfondeur(devis.profondeur);
      setCouleur(devis.couleur);
      setMargelle(devis.margelle);
      setSysteme(devis.systeme);
      setFiltration(devis.filtration);
      setTraitement(devis.traitement);
      setLocal(devis.local);
      setCouverture(devis.couverture);
      setEclairage(devis.eclairage);
    }
  }, [devis, show]);

  const normalize = (texte) => {
    if (!texte) return '';
    return texte.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
  };

  const genererNomImage = (forme, margelle, couleur) => {
    return `${normalize(forme)}_${normalize(margelle)}_${normalize(couleur)}.png`;
  };

  const saveChanges = () => {
  const updated = {
    forme,
    longueur: Number(longueur),
    largeur: Number(largeur),
    profondeur: Number(profondeur),
    couleur,
    margelle,
    systeme,
    filtration,
    traitement,
    local,
    couverture,
    eclairage,
    nomImage: genererNomImage(forme, margelle, couleur),
    diametre: forme === "Ronde" ? Number(diametre) : null,
  };

 // console.log("Données envoyées :", updated);
  handleSave({ _id: devis._id, ...updated });
  handleClose();
};

  const handleKeyDown = (e) => {
    e.preventDefault(); 
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier le devis</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form.Group>
          <Form.Label><strong>Forme :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={forme} onChange={e => setForme(e.target.value)}>
            <option>Rectangulaire</option>
            <option>Ronde</option>
            <option>Ovale</option>
          </Form.Control>
        </Form.Group>

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

        <Form.Group>
          <Form.Label><strong>Couleur :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={couleur} onChange={e => setCouleur(e.target.value)}>
            <option>Blanc</option>
            <option>Bleu clair</option>
            <option>Bleu lagune</option>
            <option>Gris clair</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Margelle :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={margelle} onChange={e => setMargelle(e.target.value)}>
            <option>Pierre</option>
            <option>Marbre</option>
            <option>Grès</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Système :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={systeme} onChange={e => setSysteme(e.target.value)}>
            <option>A skimmer</option>
            <option>A débordement</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Filtration :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={filtration} onChange={e => setFiltration(e.target.value)}>
            <option>Filtre à sable</option>
            <option>Filtre à cartouche</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Traitement :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={traitement} onChange={e => setTraitement(e.target.value)}>
            <option>Chlore</option>
            <option>Brome</option>
            <option>Sel</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Local technique :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={local} onChange={e => setLocal(e.target.value)}>
            <option>Enterré</option>
            <option>Hors-sol</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Couverture :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={couverture} onChange={e => setCouverture(e.target.value)}>
            <option>Pas de couverture</option>
            <option>bâche</option>
            <option>Volet manuel</option>
            <option>Volet motorisé</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label><strong>Éclairage :</strong></Form.Label>
          <Form.Control className="formlabel" as="select" value={eclairage} onChange={e => setEclairage(e.target.value)}>
            <option>Pas d'éclairage</option>
            <option>LEDS blancs</option>
            <option>LEDS colorés</option>
          </Form.Control>
        </Form.Group>

        <div>
          <img
            className="d-block w-75 mx-auto my-4"
            src={`/Images/choix_piscine/${genererNomImage(forme, margelle, couleur)}`}
            alt="Aperçu piscine"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='buttonsecondary' variant="secondary" onClick={saveChanges}>
          Sauvegarder
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPiscine;
