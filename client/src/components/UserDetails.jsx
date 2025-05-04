import React, { useEffect } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllpiscines } from '../JS/actions/piscineAction';
import {useNavigate} from 'react-router-dom'



function UserDetails({ show, handleClose, user }) {
  const dispatch = useDispatch();
  const allPiscine = useSelector(state => state.piscineReducer.Allpiscines);
  const navigate=useNavigate();
  
  //console.log(allPiscine)

  useEffect(() => {
   // console.log('allPiscine:', allPiscine);
 // console.log('user._id:', user._id);
    if (allPiscine.length === 0) {
      dispatch(getAllpiscines());
    }
  }, [allPiscine, dispatch]);

  const userDevis = allPiscine.filter(p => p.user === user._id);


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Détails de l'utilisateur : {user.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Adresse :</strong> {user.city}</p>
        <p><strong>Téléphone :</strong> {user.phone}</p>
        <p><strong>Nombre de devis :</strong> {userDevis.length}</p>
      </Modal.Body>
      <Modal.Footer>
      {userDevis.length>0 &&(<Button variant="primary" className='buttonthird' onClick={() => navigate(`/devis-utilisateur/${user._id}`)}>Voir les devis</Button>)}
      </Modal.Footer>
    </Modal>
  );
}

export default UserDetails;

