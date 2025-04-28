import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import "../App.css"
import { deleteUser } from '../JS/actions/userAction'


const ToSupprimer = ({show,handleClose,user}) => {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(deleteUser(user._id))
        handleClose()
    }
  return (
    <div>
      <Modal show={show} fullscreen="md-down" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Êtes-vous sûr de vouloir supprimer {user.name}? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button className='buttonsecondary' onClick={handleDelete}>Confirmer</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ToSupprimer
