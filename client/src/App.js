import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import Loading from './components/Loading';
import AllDevis from './pages/AllDevis';
import DevisUtilisateur from './pages/DevisUtilisateur';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/actions/authAction';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(current()).finally(() => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [dispatch]);

  return (
    <div className="App">
      {!isReady ? (
        <Loading />
      ) : (
        <>
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
              <Route element={<AdminRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/alldevis" element={<AllDevis />} />
                <Route path="/devis-utilisateur/:userId" element={<DevisUtilisateur />} />
              </Route>
              <Route path='/*' element={<Erreur />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;