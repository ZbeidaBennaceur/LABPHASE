import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Carroussel from '../components/Carroussel';
import CardsOffres from '../components/CardsOffres';
import AzureaEnChiffre from '../components/AzureaEnChiffre';

const Home = () => {
  const isLoad=useSelector((state)=>state.auth.isLoad)
  const user = useSelector(state => state.auth.user);
 // console.log('Utilisateur connecté :', user);

 

  return (
    <div>
      {isLoad && <Loading/>}
      {user && user.name ? (
        <h3 className='titre'>Bienvenue {user.name}</h3>
      ) : (
        <h3 className='titre'>Bienvenue</h3>
      )}
      <h3 className='titresecondaire'>Nos réalisations</h3>
      <Carroussel/>

      <h3 className='titresecondaire'>Azuréa en chiffres</h3>
      <AzureaEnChiffre/>

     <h3 className='titresecondaire'>Nos services</h3>
     <CardsOffres/>

    </div>

  ); }

export default Home;





