import React, { useState } from 'react';
import FormulairePiscine from '../components/FormulairePiscine.jsx';
import DevisModal from '../components/DevisModal.jsx';

const Simulateur = () => {
  const [devis, setDevis] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher le modal
  const handleShow = () => setShowModal(true);

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  return (
    <div className="simulateur-container">
      <FormulairePiscine setDevis={setDevis} handleShow={handleShow} />
      {devis !== null && (
        <DevisModal
          devis={devis}
          showModal={showModal}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}
    </div>
  );
};

export default Simulateur;
