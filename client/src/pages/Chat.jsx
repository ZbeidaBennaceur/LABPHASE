import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/forms.css';


const Chat = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

 
    console.log("Message envoyé :", formData);


    setFormData({ email: "", message: "" });

    
    setConfirmation("Merci pour votre message. Nous vous répondrons au plus vite.");
  };

  return (
    <div className='overlaylogin'>
      <Form className='Formulaire' onSubmit={handleSend}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre adresse email"
            className="forminput"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Votre message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Écrivez votre question ici..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="Buttoncontainer">
          <Button className='buttonprincipal' variant="primary" type="submit">
            Envoyer
          </Button>
        </div>

        {confirmation && (
          <p style={{ marginTop: '20px',  color: "rgb(136, 221, 216)", textAlign: 'center' }}>
            {confirmation}
          </p>
        )}
      </Form>
    </div>
  );
};


export default Chat;


