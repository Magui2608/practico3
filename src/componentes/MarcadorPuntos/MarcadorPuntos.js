import React from 'react';

function MarcadorPuntos({ puntosJugador, puntosPC, nombreJugador }) {
  return (
    <div className="marcador">
      <p className="nombre nombre-jugador" id="nombre-jugador">
        {nombreJugador ? nombreJugador : 'Jugador'}
      </p>
      <p className="nombre nombre-pc" id="nombre-pc">Computadora</p>
      <p className="puntos">
        <span className="puntos-jugador" id="puntos-jugador">{puntosJugador}</span>
        <span>-</span>
        <span className="puntos-pc" id="puntos-pc">{puntosPC}</span>
      </p>
    </div>
  );
}

export default MarcadorPuntos;
