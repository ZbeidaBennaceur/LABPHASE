
import {Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import NavBarre from './components/NavBarre';
import MesDevis from './pages/MesDevis';
import Simulateur from './pages/Simulateur';
import Erreur from './pages/Erreur';
import Dashboard from './pages/Dashboard';
import AdminRoute from './routes/AdminRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/actions/authAction';
import 'react-toastify/dist/ReactToastify.css';
import ToastError from './components/ToastError';
import Loading from './components/Loading';
import AllDevis from './pages/AllDevis';
import DevisUtilisateur from './pages/DevisUtilisateur';
import Footer from './components/Footer';
//import { Navigate } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const isAuth=useSelector((state)=>state.auth.isAuth)
  const user=useSelector((state)=>state.auth.user)
  const errors=useSelector((state)=>state.auth.errors)
  const isLoad=useSelector((state)=>state.auth.isLoad)


  //console.log(errors)
  //console.log(user)
  //console.log(user?.isAdmin)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(current());
    }
  }, [dispatch]);
  return (
    <div className="App">
    {isLoad && <Loading />}
    <ToastError errors={errors} />
    <NavBarre />
    
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        {isAuth && <Route path='/profile' element={<Profile />} />}
        {!isAuth && (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </>
        )}
        <Route path='/chat' element={<Chat />} />
        <Route path='/mesdevis' element={<MesDevis />} />
        <Route path='/simulateur' element={<Simulateur />} />
        <Route element={<AdminRoute isAdmin={user?.isAdmin} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alldevis" element={<AllDevis />} />
          <Route path="/devis-utilisateur/:userId" element={<DevisUtilisateur />} />
        </Route>
        <Route path='/*' element={<Erreur />} />
      </Routes>
    </div>
  
    <Footer />
  </div>
  );
}

export default App;
