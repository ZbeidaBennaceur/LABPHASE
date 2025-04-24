import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'
import '../styles/forms.css';
import { register } from '../JS/actions/authAction';


const Register = () => {
  
  const [newUser,setNewUser]=useState({
    name:"",email:"", password:"", city:"", phone:"",
  });

  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  };
  const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register(newUser,navigate));
  };



return (
    <div>
       <div className='overlaylogin' style={{marginTop:"10rem",marginBottom:"8rem"}}>
       <Form className='Formulaire' onSubmit={handleRegister}>
         <Form.Text className="text-muted" style={{ display: "block", textAlign: "center", width: "100%" }}>
               Si vous avez déjà un compte veuillez vous <a style={{textDecoration:"none", color:"rgb(136, 221, 216)"}} href='/login'>connecter</a>
                </Form.Text>
        
       <Form.Group className="mb-3">
        <Form.Label>Nom & prénom</Form.Label>
        <Form.Control type="text" placeholder="Entrez votre nom"  className="forminput" name="name" value={newUser.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre adresse email"  className="forminput"  name="email" value={newUser.email} onChange={handleChange}/>
        <Form.Text className="text-muted">
        Nous ne partagerons jamais votre adresse e-mail avec qui que ce soit.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Entrez votre mot de passe" className="forminput"  name="password" value={newUser.password} onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Adresse</Form.Label>
        <Form.Control type="text" placeholder="Entrez votre adresse"  className="forminput"  name="city" // ← important
    value={newUser.city}
    onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Numéro de téléphone</Form.Label>
        <Form.Control type="tel" placeholder="Entrez votre numéro de téléphone"  className="forminput" name="phone" value={newUser.phone} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="custom-checkbox"  type="checkbox" label="Se souvenir de moi" />
      </Form.Group>
      <div className="Buttoncontainer">
      <Button variant="primary" type="submit">
      Envoyer
      </Button>
      </div>
    </Form>
    </div>
    </div>
  )
}

export default Register
