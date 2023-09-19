import React, { useEffect } from 'react';

function Resultado({ resultado, eleccionJugador, eleccionPC, setMensajeResultado, juegoComenzado }) {
  useEffect(() => {
    // Lógica para determinar el resultado aquí
    let mensaje = '';
    if (eleccionJugador === eleccionPC) {
      mensaje = 'Empate! 😮';
    } else if (
      (eleccionJugador === 'piedra' && eleccionPC === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionPC === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionPC === 'papel')
    ) {
      mensaje = 'Ganaste un punto! 😊';
    } else {
      mensaje = 'La computadora ganó un punto! 😕';
    }

    // Actualizar el mensaje en el estado
    setMensajeResultado(mensaje);
  }, [eleccionJugador, eleccionPC, setMensajeResultado]);

  if (!juegoComenzado) {
    return null; // No renderiza nada si el juego no ha comenzado
  }

  return (
    <div className="mensaje" id="mensaje">
      <p>
        Elegiste <span className="eleccion" id="eleccion-jugador">{eleccionJugador.toUpperCase()} </span>
        y la PC eligió <span className="eleccion" id="eleccion-pc">{eleccionPC.toUpperCase()}</span>
      </p>
      <p id="gana-punto">{resultado}</p>
    </div>
  );
}

export default Resultado;
