/*import React from 'react'

const Home =()=>{
    return(
        <div className='App'>Home </div>

    )
}

export default Home;*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page page-container">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-primary mb-4">
              Bienvenue sur <span className="text-danger">VerifOoredoo</span>
            </h1>
            <p className="lead mb-4">
              Votre plateforme digitale complète pour gérer vos forfaits, 
              acheter des produits technologiques, résoudre des défis et 
              développer votre carrière.
            </p>
            <div className="d-flex gap-3">
              <Link to="/login" className="btn btn-primary btn-lg">
                Se Connecter
              </Link>
              <Link to="/register" className="btn btn-outline-primary btn-lg">
                Créer un Compte
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                    <h5>Gestion Forfaits</h5>
                    <p>Consultez votre consommation en temps réel</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <i className="fas fa-shopping-cart fa-3x text-success mb-3"></i>
                    <h5>Boutique</h5>
                    <p>Produits technologiques Ooredoo</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <i className="fas fa-lightbulb fa-3x text-warning mb-3"></i>
                    <h5>Smart Dev</h5>
                    <p>Résolvez des défis et gagnez des récompenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;