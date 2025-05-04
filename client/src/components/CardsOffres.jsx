import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardsOffres = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', padding: '30px' }}>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Une consultation sur mesure</Card.Title>
          <Card.Text style={{ height: '10rem' }}>
            Un expert vous accompagne pour comprendre vos besoins et concevoir la piscine idéale, adaptée à votre terrain, votre budget et vos envies.
          </Card.Text>
          <Button className='buttonsecondary' variant="primary"  href='/chat'>Voir plus</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Votre devis en quelques clics</Card.Title>
          <Card.Text style={{ height: '10rem' }}>
            Simulez votre projet directement en ligne et recevez un devis personnalisé, clair et détaillé, en seulement quelques étapes.
          </Card.Text>
          <Button className='buttonsecondary' variant="primary" href='/simulateur'>Voir plus</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Des conseils d’experts</Card.Title>
          <Card.Text style={{ height: '10rem' }}>
            Nous vous guidons dans le choix des matériaux, des équipements et des options pour un projet fiable, esthétique et durable.
          </Card.Text>
          <Button className='buttonsecondary' variant="primary"  href='/chat' >Voir plus</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsOffres;

