import React, { useEffect } from 'react';
import './CampoBatalla.css'; // Importa un archivo CSS específico para el componente

function CampoBatalla({ eleccionJugador, eleccionPC, juegoComenzado, campoBatallaVisible }) {
  useEffect(() => {
    // Agrega o quita la clase 'disabled' según el valor de juegoComenzado
    const campoBatalla = document.querySelector('.campo-batalla');
    if (campoBatalla) {
      if (!juegoComenzado) {
        campoBatalla.classList.add('disabled');
      } else {
        campoBatalla.classList.remove('disabled');
      }
    }
  }, [juegoComenzado]);

  // Define las rutas de las imágenes correspondientes a las opciones
  const imagenJugador = process.env.PUBLIC_URL + `/imagenes/${eleccionJugador}.png`;
  const imagenPC = process.env.PUBLIC_URL + `/imagenes/${eleccionPC}.png`;

  return (
    <div className={`campo-batalla ${campoBatallaVisible ? '' : 'hidden'}`}>
      {/* Muestra la imagen de la elección del jugador */}
      {eleccionJugador && (
        <div className="ataque" id="ataque-jugador">
          <img src={imagenJugador} alt={`Elección del jugador: ${eleccionJugador}`} />
        </div>
      )}

      {/* Muestra el "VS" entre las imágenes */}
      {eleccionJugador && eleccionPC && (
        <div className="versus">
          <p>VS</p>
        </div>
      )}

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



