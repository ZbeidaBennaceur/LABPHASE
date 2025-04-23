import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/forms.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/actions/authAction';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, navigate));
  };

  return (
    <div className='overlaylogin'>
      <Form className='Formulaire' onSubmit={handleLogin}>
        <Form.Text className="text-muted" style={{ display: "block", textAlign: "center", width: "100%" }}>
          Si vous n'avez pas de compte veuillez vous 
          <a style={{ textDecoration: "none", color: "rgb(136, 221, 216)" }} href='/register'> enregistrer</a>
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre adresse email"
            className="forminput"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Nous ne partagerons jamais votre adresse e-mail avec qui que ce soit.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
            className="forminput"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="custom-checkbox" type="checkbox" label="Se souvenir de moi" />
        </Form.Group>

        <div className="Buttoncontainer">
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
