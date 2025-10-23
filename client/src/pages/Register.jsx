/*import React from 'react'

const Register =()=>{
    return(
        <div className='App'>Register </div>

    )
}

export default Register;*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
      await axios.post('http://localhost:5000/api/auth/register', formData);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Erreur d\'inscription');
    }
  };

  return (
    <div className="page-container">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Inscription</h2>
            <p>Créez votre compte VerifOoredoo</p>
          </div>
          <div className="auth-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Nom</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <button type="submit" className="btn-auth">Créer mon Compte</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/login">Déjà un compte ? Se connecter</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;