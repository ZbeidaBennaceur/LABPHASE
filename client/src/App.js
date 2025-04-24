
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
import Dashboard from './pages/Dashboard';
import AdminRoute from './routes/AdminRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/actions/authAction';
//import { Navigate } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const isAuth=useSelector(state=>state.auth.isAuth)
  const user=useSelector(state=>state.auth.user)
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
      <NavBarre/>
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
</Route>
        <Route path='/*' element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
