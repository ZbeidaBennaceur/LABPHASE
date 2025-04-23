
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import NavBarre from './components/NavBarre';
import MesDevis from './pages/MesDevis';
import Simulateur from './pages/Simulateur';
import Erreur from './pages/Erreur';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './JS/actions/authAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(current());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <NavBarre/>
      <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/chat' element={<Chat/>}/>
     <Route path='/mesdevis' element={<MesDevis/>}/>
     <Route path='/simulateur' element={<Simulateur/>}/>
     <Route path='/*' element={<Erreur/>}/>
     </Routes>
    </div>
  );
}

export default App;
