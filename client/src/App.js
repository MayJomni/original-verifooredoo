/*import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Login from './pages/Login';
import Footer  from './components/Footer.jsx';
import BarreNav from './components/BarreNav.jsx';


import Register from './pages/Register';
import Profile from './pages/Profile';
import Erreur from './pages/Erreur';

function App() {
  return (
    <div className="App">
      <BarreNav/>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Login' element={ <Login />} />
        <Route path='/Register' element={ <Register />} />
        <Route path='/Profile' element={ <Profile />} />
        <Route path='/*' element={ <Erreur/>} />

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarreNav from './components/BarreNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Erreur from './pages/Erreur';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <BarreNav isAuthenticated={isAuthenticated} user={user} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;