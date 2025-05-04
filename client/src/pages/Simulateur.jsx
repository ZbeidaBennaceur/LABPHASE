import React, { useState } from 'react';
import FormulairePiscine from '../components/FormulairePiscine.jsx';
import DevisModal from '../components/DevisModal.jsx';
import { useDispatch } from 'react-redux';
import { createPiscine } from '../JS/actions/piscineAction.js';


const Simulateur = () => {
  const [devis, setDevis] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch=useDispatch()
  

  // Fonction pour afficher le modal
  const handleShow = () => setShowModal(true);

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);


  const handleDevis=(data)=>{
    setDevis(data);
    dispatch(createPiscine(data));
    handleShow()
  }

  return (
    <div className="simulateur-container">
      <FormulairePiscine setDevis={handleDevis} handleShow={handleShow} />
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
