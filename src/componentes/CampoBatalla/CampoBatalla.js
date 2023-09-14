import React, { useState } from 'react';

function CampoBatalla({ eleccionJugador, eleccionPC, resultado }) {
  return (
    <div className="campo-batalla disabled">
      <div className="ataque">
        <p>Elegiste: {eleccionJugador}</p>
      </div>
      <div className="ataque">
        <p className="versus">VS</p>
        <p>La PC eligió: {eleccionPC}</p>
      </div>
      <div className="ataque">
        <p>{resultado}</p>
      </div>
    </div>
  );
}

export default CampoBatalla;