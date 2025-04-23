import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  console.log('Utilisateur connecté :', user);

  return (
    <div>
      {user && user.name ? (
        <h3>Bienvenue {user.name}</h3>
      ) : (
        <h1>Bienvenue, utilisateur non identifié</h1>
      )}
    </div>
  ); }

export default Profile;
