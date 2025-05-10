import React, { useState } from 'react';
import FormulairePiscine from '../components/FormulairePiscine.jsx';
import DevisModal from '../components/DevisModal.jsx';


const Simulateur = () => {
  const [devis, setDevis] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDevis = (data) => {
    setDevis(data);
    handleShow();
  };

  return (
    <div className="simulateur-container">
     <FormulairePiscine onSubmit={handleDevis} />
      {devis && (
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
