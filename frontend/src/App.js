import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Invernadero1 from './components/paginas/Invernadero1';
import Invernadero2 from './components/paginas/Invernadero2';
import Invernadero3 from './components/paginas/Invernadero3';
import Consultas from './components/paginas/Consultas';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Invernadero1" element={<Invernadero1 />} />
            <Route path="/Invernadero2" element={<Invernadero2 />} />
            <Route path="/Invernadero3" element={<Invernadero3 />} />
            <Route path="/Consultas" element={<Consultas />} />
          </Routes>
        </div>
        <div className="footer">
          {/* Agrega aquí tu contenido para la sección de temperatura */}
          <div className="temperature-section">
            SECCION
          </div>
          {/* Agrega aquí tu contenido para la sección de humedad */}
          <div className="humidity-section">
            SECCION2
          </div>
          {/* Agrega aquí tu contenido para la sección de CO2 */}
          <div className="co2-section">
            SECCION 3
          </div>
          {/* Agrega aquí tu imagen como pie de página */}
          <div className="footer-image">
            SECCION1
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;