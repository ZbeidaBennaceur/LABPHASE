import React from 'react'
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logout } from '../JS/actions/authAction';
import '../styles/navBarr.css';

const NavBarre = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth);
  const isAdmin=useSelector(state=>state.auth.user?.isAdmin)
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className="navbarrecontainer">
    <Navbar expand="md" className="bg-body-tertiary sticky-top navbarre">
      <Container>
        <Navbar.Brand href="/">
          <img src="/Images/LOGO.png" alt="Logo" className="logo" style={{ height: '80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-center">
            <Nav.Link className="ButtonNav" href="/">Accueil</Nav.Link>
            {!isAuth && (
              <>
                <Nav.Link className="ButtonNav" href="/login">S'identifier</Nav.Link>
                <Nav.Link className="ButtonNav" href="/register">Créer un compte</Nav.Link>
              </>
            )}
            {isAuth && (
              <NavDropdown className="ButtonNav" title="Mon profil" id="basic-nav-dropdown">
                <NavDropdown.Item className="ButtonNavDrop" href="/profile">
                    Mon compte
                  </NavDropdown.Item>
                {!isAdmin && (
                  <NavDropdown.Item className="ButtonNavDrop" href="/mesdevis">
                    Mes devis
                  </NavDropdown.Item>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item className="ButtonNavDrop" onClick={handleLogout}>
                  Déconnexion
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link className="ButtonNav" href="/simulateur">Simulateur</Nav.Link>
            {!isAdmin && <Nav.Link className="ButtonNav" href="/chat">Discutez avec nous</Nav.Link>}
            {isAdmin && <Nav.Link className="ButtonNav" href="/alldevis">Devis</Nav.Link>}
            {isAdmin && <Nav.Link className="ButtonNav" href="/dashboard">Tableau de bord</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavBarre
