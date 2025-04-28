import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/Loading';

const AdminRoute = ({ isAdmin }) => {

 // console.log(isAdmin);

  if (isAdmin === undefined) {
    return <Loading/>;
  }

  if (!isAdmin) {
    alert("Accès interdit : vous n'êtes pas admin.");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
