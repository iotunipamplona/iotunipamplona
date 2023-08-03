import React from 'react';

const Invernadero1 = () => {
  // Ejemplo de valores importados de MongoDB Atlas
  const temperatura = 25;
  const humedad = 70;
  const co2 = 500;

  return (
    <div>
      <h1>Esta es la página de Invernadero 1</h1>
      
      <div className="section">
        <h3>Temperatura</h3>
        <p>{temperatura} °C</p>
      </div>

      <div className="section">
        <h3>Humedad</h3>
        <p>{humedad}%</p>
      </div>

      <div className="section">
        <h3>CO2</h3>
        <p>{co2} ppm</p>
      </div>

      <div className="section">
        <h3>Imagen de pie de página</h3>
        {/* Agrega aquí tu imagen como pie de página */}
      </div>
    </div>
  );
}

export default Invernadero1;