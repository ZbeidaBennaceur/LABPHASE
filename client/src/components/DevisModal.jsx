import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPiscine } from '../JS/actions/piscineAction';

const DevisModal = ({ devis, showModal, handleClose }) => {
  
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleSave = () => {
   // console.log("handleSave déclenché");

    const data = {
      emplacement: devis.emplacement,
      forme: devis.forme,
      longueur: Number(devis.longueur),
      largeur: Number(devis.largeur),
      profondeur: Number(devis.profondeur),
      diametre: Number(devis.diametre),
      systeme: devis.systeme,
      couleur: devis.couleur,
      margelle: devis.margelle,
      filtration: devis.filtration,
      traitement: devis.traitement,
      local: devis.local,
      couverture: devis.couverture,
      eclairage: devis.eclairage,
      devis: Number(devis.devis)
    };

    dispatch(createPiscine(data));
  
   // console.log(data);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Devis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="devis-content">
          <p><strong>Emplacement :</strong> {devis.emplacement}</p>
          <p><strong>Forme :</strong> {devis.forme}</p>
          {devis.forme === "ronde" ? (
            <p><strong>Diamètre :</strong> {devis.diametre} m</p>
          ) : (
            <>
              <p><strong>Longueur :</strong> {devis.longueur} m</p>
              <p><strong>Largeur :</strong> {devis.largeur} m</p>
            </>
          )}
          <p><strong>Profondeur :</strong> {devis.profondeur} m</p>
          <p><strong>Couleur :</strong> {devis.couleur}</p>
          <p><strong>Margelle :</strong> {devis.margelle}</p>
          <p><strong>Système :</strong> {devis.systeme}</p>
          <p><strong>Filtration :</strong> {devis.filtration}</p>
          <p><strong>Traitement :</strong> {devis.traitement}</p>
          <p><strong>Local technique :</strong> {devis.local}</p>
          <p><strong>Couverture :</strong> {devis.couverture}</p>
          <p><strong>Éclairage :</strong> {devis.eclairage}</p>
          <hr />
          <p><strong>Prix estimé de votre piscine :</strong> {Number(devis.devis).toFixed(2)} DT</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
       {!isAuth &&(<p>Si vous souhaitez enregistrer ce devis, veuillez vous <a style={{textDecoration:"none", color:"rgb(136, 221, 216)"}} href='/login'>connecter</a> ou vous <a style={{textDecoration:"none", color:"rgb(136, 221, 216)"}} href='/register'>enregistrer</a>.</p>)}
        {isAuth && (
          <Button className='buttonsecondary' variant="secondary" onClick={handleSave}>
            Sauvegarder
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default DevisModal;
