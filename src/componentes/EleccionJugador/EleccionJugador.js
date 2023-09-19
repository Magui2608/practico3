import React, { useState } from 'react';
import './EleccionJugador.css';

function EleccionJugador({ onEleccion, setEleccionJugador }) {
  
  // Manejadores de eventos para cada opción
  const handlePiedraClick = () => {
    setEleccionJugador('piedra');
    onEleccion('piedra'); // Llama a la función de manejo de elección con la elección del jugador
  };

  const handlePapelClick = () => {
    setEleccionJugador('papel');
    onEleccion('papel'); // Llama a la función de manejo de elección con la elección del jugador
  };

  const handleTijeraClick = () => {
    setEleccionJugador('tijera');
    onEleccion('tijera'); // Llama a la función de manejo de elección con la elección del jugador
  };
  
  

  return (
    <div className="opciones-juego">
      <button className="opcion" id="piedra" onClick={handlePiedraClick}>
        <img src={process.env.PUBLIC_URL + '/imagenes/piedra.png'}  alt="imagen mano piedra" width="50px" height="50px" />
      </button>
      <button className="opcion" id="papel" onClick={handlePapelClick}>
        <img src={process.env.PUBLIC_URL + '/imagenes/papel.png'} alt="imagen mano papel" width="50px" height="50px" />
      </button>
      <button className="opcion" id="tijera" onClick={handleTijeraClick}>
        <img src={process.env.PUBLIC_URL + '/imagenes/tijera.png'}  alt="imagen mano tijera" width="50px" height="50px" />
      </button>
    </div>
  );
}

export default EleccionJugador;

