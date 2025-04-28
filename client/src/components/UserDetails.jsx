import React from 'react'
import { Modal } from 'react-bootstrap'
import "../App.css"

function UserDetails({ show, handleClose, userId }) {
  return (
 
    <div>
      <Modal show={show} fullscreen="md-down" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>

    </div>
  )
}

export default UserDetails
