
function PieDePagina() {
  return (
    <>
      {/* Agrega información  de contacto sobre el propietario de la página como sus redes sociales e email */}
      <address>
        {/* Agrega íconos con enlaces a distintas redes sociales */}
        <div className="redes_container">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/naoko.ishida.ono"
                className="facebook"
                target="_blank"
              >
                <i
                  className="bx bxl-facebook social_icon"
                  style={{ fontSize: 28 }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/magda-ichida/"
                className="linkedIn"
                target="_blank"
              >
                <i
                  className="bx bxl-linkedin-square social_icon"
                  style={{ fontSize: 28 }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Magui2608"
                className="github"
                target="_blank"
              >
                <i
                  className="bx bxl-github social_icon"
                  style={{ fontSize: 28 }}

                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/naoko.ishida.ono/"
                className="instagram"
                target="_blank"
              >
                <i
                  className="bx bxl-instagram social_icon"
                  style={{ fontSize: 28 }}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* Agrega nombre del creador de la página y enlace para contacto por email*/}
        <p className="copyright">
          © Copyright Magda Ichida. Argentina Programa 4.0. <br /> Si quieres
          contactarme, escríbeme a {" "}
          <a 
          href="mailto:magui_ichida@hotmail.com" 
          target="_blank"
          >magui_ichida@hotmail.com</a>
        </p>
      </address>
    </>

  );
}

export default PieDePagina;