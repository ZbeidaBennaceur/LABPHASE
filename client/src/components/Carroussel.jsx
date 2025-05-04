import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Carroussel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
    className="d-block w-100"
    src="/Images/CAROUSSEL1.jpg"
    alt="First slide"
  />
        <Carousel.Caption style={{backgroundColor:"rgba(136,221,216, 0.54)", width:"100%"}}>
          <h3>Maison individuelle à Aix-en-Provence (2022)</h3>
          <p>"Une oasis moderne pour des étés inoubliables."
          Piscine rectangulaire intégrée à une maison contemporaine, idéale pour les familles cherchant confort et esthétique dans un cadre provençal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
    className="d-block w-100"
    src="/Images/CAROUSSEL2.jpg"
    alt="First slide"
  />
        <Carousel.Caption style={{backgroundColor:"rgba(136,221,216, 0.54)", width:"100%"}}>
          <h3>Hôtel de luxe à Marrakech (2021)</h3>
          <p>"L’élégance au service du bien-être."
          Conçue pour accueillir les hôtes en quête de raffinement, cette piscine à débordement s’intègre dans un rooftop pour une vue imprenable au coucher du soleil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
    className="d-block w-100"
    src="/Images/CAROUSSEL3.jpg"
    alt="First slide"
  />
        <Carousel.Caption style={{backgroundColor:"rgba(136,221,216, 0.54)", width:"100%"}}>
          
          <h3>Villa privée en bord de mer – Saint-François (Guadeloupe, 2024)</h3>
          <p>
          "Luxe discret dans un écrin tropical."
          Une piscine longue et étroite pensée pour la détente en toute intimité, avec accès direct sur un jardin exotique et une vue dégagée sur l’océan. Le carrelage effet pierre bleue sublime les reflets de l’eau.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carroussel
