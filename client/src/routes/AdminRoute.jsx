import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../components/Loading';

const AdminRoute = () => {
  const { user, isLoad, isAuth } = useSelector((state) => state.auth);

  console.log("AdminRoute monté");
  console.log("isAuth =", isAuth);
  console.log("isLoad =", isLoad);
  console.log("user =", user);
  console.log("isAdmin =", user?.isAdmin);

  if (isLoad) return <Loading />;

  if (!isAuth) {
    console.log("Redirection vers /login");
    return <Navigate to="/login" replace />;
  }

  if (!user?.isAdmin) {
    console.log("Redirection vers / (non admin)");
    alert("Accès interdit : vous n'êtes pas admin.");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
