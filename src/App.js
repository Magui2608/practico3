import React, { useState, useEffect } from 'react';
import Titulo from './componentes/Titulo/Titulo';
import MarcadorPuntos from './componentes/MarcadorPuntos/MarcadorPuntos';
import CampoBatalla from './componentes/CampoBatalla/CampoBatalla';
import Subtitulo from './componentes/Subtitulo/Subtitulo';
import EleccionJugador from './componentes/EleccionJugador/EleccionJugador';
import Resultado from './componentes/Resultado/Resultado';
import PieDePagina from './componentes/PieDePagina/PieDePagina';
import BtnReinicio from './componentes/BtnReinicio/BtnReinicio';
import './App.css';

function App() {
  const [nombreIngresado, setNombreIngresado] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  const [error, setError] = useState('');
  const [jugador, setJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [eleccionPC, setEleccionPC] = useState('');
  const [puntosJugador, setPuntosJugador] = useState(0);
  const [puntosPC, setPuntosPC] = useState(0);

  const [mensajeResultado, setMensajeResultado] = useState(''); // Agregamos el estado para el mensaje de resultado

  useEffect(() => {
    if (!nombreIngresado) {
      const nombreJugador = window.prompt('Bienvenido jugador! Por favor, ingresa tu nombre:');
      if (nombreJugador === null || nombreJugador.trim() === '' || !isNaN(nombreJugador)) {
        setError('No has introducido tu nombre! Por favor, ingresa un nombre válido.');
        setMostrarError(true);
      } else {
        const nombreFormateado =
          nombreJugador.charAt(0).toUpperCase() + nombreJugador.slice(1).toLowerCase();
        setJugador(nombreFormateado);
        setMostrarError(false);
        setNombreIngresado(true);
        setError('');
      }
    }
  }, [nombreIngresado]);

  const handleEleccion = (eleccionJugador) => {
    // Generar la elección de la computadora (piedra, papel o tijera de forma aleatoria)
    const opcionesComputadora = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora =
      opcionesComputadora[Math.floor(Math.random() * opcionesComputadora.length)];

    // Lógica para determinar el resultado
    let resultado = '';
    if (eleccionJugador === eleccionComputadora) {
      resultado = 'Empate! 😮';
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
      resultado = 'Ganaste un punto! 😊';
      setPuntosJugador(puntosJugador + 1); // Actualizar los puntos del jugador
    } else {
      resultado = 'La computadora ganó un punto! 😕';
      setPuntosPC(puntosPC + 1); // Actualizar los puntos de la computadora
    }

    // Actualizar el estado con la elección de la computadora y el resultado
    setEleccionPC(eleccionComputadora);
    setMensajeResultado(resultado); // Actualizar el mensaje de resultado
  };


  const reiniciarJuego = () => {
    setJugador('');
    setEleccionJugador('');
    setEleccionPC('');
    setMensajeResultado(''); // Restablecer el mensaje de resultado
    setPuntosJugador(0);
    setPuntosPC(0);
  };

  return (
    <>
      <Titulo />
      <main>
        <p className="instrucciones" id="instrucciones">
          El mejor de <strong>5 intentos</strong> gana.
        </p>
        <MarcadorPuntos
          puntosJugador={puntosJugador}
          puntosPC={puntosPC}
          nombreJugador={jugador}
        />
        <CampoBatalla
          eleccionJugador={eleccionJugador}
          eleccionPC={eleccionPC}
          resultado={mensajeResultado} // Usamos el mensaje de resultado actualizado
        />
        <Subtitulo />
        <EleccionJugador
          onEleccion={handleEleccion}
          setEleccionJugador={setEleccionJugador}
          setEleccionPC={setEleccionPC}
        />
        <Resultado
          resultado={mensajeResultado}
          eleccionJugador={eleccionJugador}
          eleccionPC={eleccionPC}
          setMensajeResultado={setMensajeResultado} 
        />

        <BtnReinicio reiniciarJuego={reiniciarJuego} />
      </main>
      <footer>
        <PieDePagina />
      </footer>
    </>
  );
}

export default App;



