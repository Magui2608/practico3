// Importa las dependencias necesarias
import React, { useState, useEffect } from 'react';
import './App.css'; // Importa los estilos CSS

// Importa los componentes necesarios
import Titulo from './componentes/Titulo/Titulo';
import MarcadorPuntos from './componentes/MarcadorPuntos/MarcadorPuntos';
import CampoBatalla from './componentes/CampoBatalla/CampoBatalla';
import Subtitulo from './componentes/Subtitulo/Subtitulo';
import EleccionJugador from './componentes/EleccionJugador/EleccionJugador';
import Resultado from './componentes/Resultado/Resultado';
import PieDePagina from './componentes/PieDePagina/PieDePagina';
import BtnReinicio from './componentes/BtnReinicio/BtnReinicio';


function App() {
  // Estados para el juego
  const [nombreIngresado, setNombreIngresado] = useState(false); // Estado para verificar si se ingresó un nombre
  const [puntosJugador, setPuntosJugador] = useState(0); // Puntos del jugador
  const [puntosPC, setPuntosPC] = useState(0); // Puntos de la PC
  const [eleccionJugador, setEleccionJugador] = useState(''); // Elección del jugador
  const [eleccionPC, setEleccionPC] = useState(''); // Elección de la PC
  const [juegoComenzado, setJuegoComenzado] = useState(false); // Estado del juego (comenzado o no)
  const [campoBatallaVisible, setCampoBatallaVisible] = useState(true); // Visibilidad del campo de batalla
  const [mensajeResultado, setMensajeResultado] = useState(''); // Mensaje de resultado
  const [ganador, setGanador] = useState(null); // Ganador del juego (null si no hay ganador)

  // Estados para manejo de errores
  const [mostrarError, setMostrarError] = useState(false); // Estado para mostrar errores
  const [error, setError] = useState(''); // Mensaje de error

  // Estado para el nombre del jugador
  const [jugador, setJugador] = useState('');

  // Estados para contadores
  const [rondasJugadas, setRondasJugadas] = useState(0); // Contador de rondas jugadas
  const [victoriasJugador, setVictoriasJugador] = useState(0); // Contador de victorias del jugador
  const [victoriasPC, setVictoriasPC] = useState(0); // Contador de victorias de la PC
  const [victoriasSeguidasJugador, setVictoriasSeguidasJugador] = useState(0); // Contador de victorias seguidas del jugador
  const [victoriasSeguidasPC, setVictoriasSeguidasPC] = useState(0); // Contador de victorias seguidas de la PC
  const [intentos, setIntentos] = useState(0); // Contador de intentos

  useEffect(() => {
    // Lógica para obtener el nombre del jugador
    if (!nombreIngresado) {
      const nombreJugador = window.prompt('Bienvenido jugador! Por favor, ingresa tu nombre:');
      if ((nombreJugador === null) || (nombreJugador.trim() === '') || (!isNaN(nombreJugador))) {
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

  // Función para manejar la elección del jugador y determinar el resultado
  const handleEleccion = (eleccionJugador) => {
    const opcionesComputadora = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora =
      opcionesComputadora[Math.floor(Math.random() * opcionesComputadora.length)];

    let resultado = '';
    if (eleccionJugador === eleccionComputadora) {
      resultado = 'Empate! 😮';
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
      resultado = 'Ganaste un punto! 😊';
      setPuntosJugador(puntosJugador + 1);
      setVictoriasSeguidasJugador(victoriasSeguidasJugador + 1);
      setVictoriasSeguidasPC(0);
    } else {
      resultado = 'La computadora ganó un punto! 😕';
      setPuntosPC(puntosPC + 1);
      setVictoriasSeguidasPC(victoriasSeguidasPC + 1);
      setVictoriasSeguidasJugador(0);
    }

    // Incrementar el contador de intentos
    setIntentos(intentos + 1);

    setEleccionPC(eleccionComputadora);
    setMensajeResultado(resultado);
    setCampoBatallaVisible(true);
    setJuegoComenzado(true);

    // Incrementar el contador de rondas jugadas
    setRondasJugadas(rondasJugadas + 1);

    // Verificar si algún jugador ha ganado 3 victorias
    if (puntosJugador === 3) {
      setGanador('jugador');
    } else if (puntosPC === 3) {
      setGanador('pc');
    }
  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    setGanador(null);
    setJugador('');
    setEleccionJugador('');
    setEleccionPC('');
    setMensajeResultado('');
    setPuntosJugador(0);
    setPuntosPC(0);
    setVictoriasJugador(0);
    setVictoriasPC(0);
    setRondasJugadas(0);
    setCampoBatallaVisible(false);
    setJuegoComenzado(false);
    setIntentos(0); // Reiniciar el contador de intentos
  };

  return (
    <>
      <Titulo />
      <main>
        {ganador === null ? (
          <>
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
              resultado={mensajeResultado}
              juegoComenzado={juegoComenzado}
              campoBatallaVisible={campoBatallaVisible}
            />

            <Subtitulo />

            {/* Renderizar opciones de elección */}
            <EleccionJugador
              onEleccion={handleEleccion}
              setEleccionJugador={setEleccionJugador}
              setEleccionPC={setEleccionPC}
              setJuegoComenzado={setJuegoComenzado}
            />
          </>
        ) : (
          // Mostrar mensaje del ganador
          <p className="instrucciones" id="instrucciones" style={{ color: ganador === 'jugador' ? 'green' : ganador === 'pc' ? 'red' : 'orange', fontSize: '24px' }}>
            {ganador === 'jugador' ? `¡Has ganado el juego! 🥳` : ganador === 'pc' ? "La computadora ha ganado el juego. 😓" : "La partida ha terminado en empate. 😐"}
          </p>
        )}
        <Resultado
          resultado={mensajeResultado}
          eleccionJugador={eleccionJugador}
          eleccionPC={eleccionPC}
          setMensajeResultado={setMensajeResultado}
          juegoComenzado={juegoComenzado}
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


