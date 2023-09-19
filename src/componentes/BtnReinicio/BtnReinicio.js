import React from 'react';

function BtnReinicio({ reiniciarJuego }) {
  
  return (
    <button className="btn" onClick={reiniciarJuego} id="reiniciar">
      Reiniciar Juego
    </button>
  );
}

export default BtnReinicio;


