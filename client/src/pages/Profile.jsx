import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const Profile = () => {
  const isLoad=useSelector((state)=>state.auth.isLoad)
  const user = useSelector(state => state.auth.user);
  console.log('Utilisateur connecté :', user);

  return (
    <div>
      {isLoad && <Loading/>}
      {user && user.name ? (
        <h3>Bienvenue {user.name}</h3>
      ) : (
        <h1>Bienvenue</h1>
      )}
    </div>
  ); }

export default Profile;
