import React from 'react';
import '../styles/home.css';


const Home = () => {
  return (
    <div className="home-container">
      <img src="/Images/PiscineImageHome.jpg" alt="Piscine" className="background-image" />

      <div className="overlay">
        <div className="textContainer">
      <h2 className="titre"> Votre piscine en quelques clics</h2>
      <div className="button-container">
      <button type="submit">Votre devis ici</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
