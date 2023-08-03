import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sistema de Monitoreo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Invernadero1">Invernadero 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Invernadero2">Invernadero 2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Invernadero3">Invernadero 3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Consultas">Consultas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;