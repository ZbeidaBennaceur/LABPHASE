import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DevisModal = ({ devis, showModal, handleClose, handleShow }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Devis Estimé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le devis estimé pour votre piscine est : <strong>{devis.toFixed(2)} DT</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button className='buttonsecondary' variant="secondary" onClick={handleClose}>Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DevisModal;