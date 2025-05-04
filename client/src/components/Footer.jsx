import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div>
       <footer className="footer text-dark py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>À propos</h5>
            <p>
              Azurea est votre partenaire de confiance pour la construction de piscines sur mesure.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/simulateur" className="text-dark">Simulateur</a></li>
              <li><a href="/chat" className="text-dark">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Suivez-nous</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">© {new Date().getFullYear()} Azurea. Tous droits réservés.</p>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
