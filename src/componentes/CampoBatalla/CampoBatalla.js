import React from 'react';
import './CampoBatalla.css'; // Importa un archivo CSS específico para el componente

function CampoBatalla({ eleccionJugador, eleccionPC, juegoComenzado, campoBatallaVisible }) {
  // Define las rutas de las imágenes correspondientes a las opciones
  const imagenJugador = process.env.PUBLIC_URL + `/imagenes/${eleccionJugador}.png`;
  const imagenPC = process.env.PUBLIC_URL + `/imagenes/${eleccionPC}.png`;

  if (!juegoComenzado) {
    return null; // Si juegoComenzado es falso, no muestra nada
  }

  if (!campoBatallaVisible) {
    return null; // Si campoBatallaVisible es falso, no muestra nada
  }

  return (
    <div className="campo-batalla">
      {/* Muestra la imagen de la elección del jugador */}
      {eleccionJugador && (
        <div className="ataque" id="ataque-jugador">
          <img src={imagenJugador} alt={`Elección del jugador: ${eleccionJugador}`} />
        </div>
      )}
      <div className="ataque">
        <p className="versus">VS</p>
      </div>
      {/* Muestra la imagen de la elección de la PC */}
      {eleccionPC && (
        <div className="ataque" id="ataque-pc">
          <img src={imagenPC} alt={`Elección de la PC: ${eleccionPC}`} />
        </div>
      )}
    </div>
  );
}

export default CampoBatalla;





