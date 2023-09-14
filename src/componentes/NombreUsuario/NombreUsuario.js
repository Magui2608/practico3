import React, { useEffect, useState } from 'react';

function NombreUsuario({ actualizarJugador, actualizarMostrarError, actualizarNombreIngresado }) {
  const [nombreIngresado, setNombreIngresado] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!nombreIngresado) {
      const nuevoNombreJugador = window.prompt('Bienvenido jugador! Por favor, ingresa tu nombre:');
      nuevoNombreJugador.trim();
      if (nuevoNombreJugador === null || nuevoNombreJugador === '' || !isNaN(nuevoNombreJugador)) {
        // Si el usuario cancela el prompt o ingresa un nombre en blanco, muestra el error
        setError('No has introducido tu nombre! Por favor, ingresa un nombre válido.');
        actualizarMostrarError(true);
      } else {
        // Si se ingresa un nombre válido, actualiza el nombre del jugador y oculta el error
        const nombreFormateado =
          nuevoNombreJugador.charAt(0).toUpperCase() + nuevoNombreJugador.slice(1).toLowerCase();
        actualizarJugador(nombreFormateado);
        actualizarMostrarError(false);
        setNombreIngresado(true); // Marca que el nombre ha sido ingresado
        setError(''); // Limpia el mensaje de error

        // Llama a la función para actualizar el estado del nombre ingresado
        actualizarNombreIngresado(true);
      }
    };

  }, [actualizarJugador, actualizarMostrarError, actualizarNombreIngresado, nombreIngresado]);

  // El componente renderiza un mensaje de error si hay un error
  return (
    <div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}


