import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/image/logo.png';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="" />
          <h2>Encontre sua vaga aqui.</h2>
        </div>
        <div className="buttons-container">
          <Link to="/cadastro-empresa" className="register-company">
            Cadastro empresa
          </Link>
          <Link to="/cadastro-curriculo" className="register-resume">
            Cadastro currículo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
