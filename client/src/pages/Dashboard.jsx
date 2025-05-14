import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../JS/actions/userAction';
import ListUsers from '../components/ListUsers';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
const isAuth = useSelector((state) => state.auth.isAuth);
const isLoad = useSelector((state) => state.user.isLoad);
  

  useEffect(() => {
   // console.log("Dashboard monté");
    if (!isAuth) {
      navigate('/login');
    } else {
       console.log("Dispatch getUsers lancé");
      dispatch(getUsers());
    }
  }, [dispatch, isAuth, navigate]);

  return (
    <div>
      {isLoad ? <Loading /> : <ListUsers />}
      
    </div>
  );
};

export default Dashboard;

