import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/forms.css';

const EditPiscine = ({ devis, handleSave, show, handleClose }) => {
  const [forme, setForme] = useState('');
  const [emplacement, setEmplacement] = useState('');
  const [longueur, setLongueur] = useState('');
  const [largeur, setLargeur] = useState('');
  const [diametre, setDiametre] = useState('');
  const [profondeur,setProfondeur]=useState('');
  const [couleur,setCouleur]=useState('');
  const [margelle,setMargelle]=useState('');
  const [systeme,setSysteme]=useState('')
  const [filtration,setFiltration]=useState('');
  const [traitement,setTraitement]=useState('')
  const [local,setLocal]=useState('')
  const [couverture,setCouverture]=useState('')
  const [eclairage,setEclairage]=useState('')
  useEffect(() => {
    if (devis) {
      setForme(devis.forme);
      setEmplacement(devis.emplacement);
      setLongueur(devis.longueur);
      setLargeur(devis.largeur);
      setDiametre(devis.diametre);
      setProfondeur(devis.profondeur);
      setCouleur(devis.couleur);
      setMargelle(devis.margelle);
      setSysteme(devis.systeme)
      setFiltration(devis.filtration)
      setTraitement(devis.traitement)
      setLocal(devis.local)
      setCouverture(devis.couverture)
      setEclairage(devis.eclairage)
    }
  }, [devis, show]);

  const saveChanges = () => {
    const updated = {
      ...devis,
      forme,
      emplacement,
      longueur: Number(longueur),
      largeur: Number(largeur),
      diametre: Number(diametre),
      profondeur: Number(profondeur),
      couleur,
      margelle,
      systeme,
      filtration,
      traitement,
      local,
      couverture,
      eclairage

    };
    handleSave(updated);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier le devis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

