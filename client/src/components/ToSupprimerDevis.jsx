import React from 'react'
import { deletePiscine } from '../JS/actions/piscineAction'
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

const ToSupprimerDevis = ({show,handleClose,piscine}) => {
    const dispatch=useDispatch()
    const handleDelete=()=>{
       console.log("🗑 Suppression déclenchée pour :", piscine._id);
        dispatch(deletePiscine(piscine._id));
        handleClose() }
    
  return (
    <div>
      <Modal show={show} fullscreen="md-down" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Êtes-vous sûr de vouloir supprimer ce devis? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button className="buttonsecondarydel" onClick={handleDelete}>Confirmer</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ToSupprimerDevis
