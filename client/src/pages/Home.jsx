import React from 'react';
import '../styles/home.css';
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleClick=()=>{navigate('/simulateur')}
  return (
    <div className="home-container">
      <img src="/Images/PiscineImageHome.jpg" alt="Piscine" className="background-image" />

      <div className="overlay">
        <div className="textContainer">
      <h2 className="titre"> Votre piscine en quelques clics</h2>
      <div className="button-container">
      <button type="submit" onClick={handleClick} className='buttonprincipal' >Votre devis ici</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
