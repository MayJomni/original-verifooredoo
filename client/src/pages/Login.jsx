/*import React from 'react'

const Login =()=>{
    return(
        <div className='App'>Login </div>

    )
}

export default Login;*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated, setUser }) => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setUser(response.data.user);
      navigate('/profile');
    } catch (error) {
      setError(error.response?.data?.message || 'Erreur de connexion');
    }
  };

  return (
    <div className="page-container">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Connexion</h2>
            <p>Accédez à votre compte VerifOoredoo</p>
          </div>
          <div className="auth-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Numéro de téléphone Ooredoo</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="Ex: 12345678"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-auth">Se Connecter</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/register">Créer un nouveau compte</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;