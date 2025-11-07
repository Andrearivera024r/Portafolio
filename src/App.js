
import './App.css';

function App() {
  return (
    <div>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portafolio de Andrea</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header className="hero">
     <div className="nubes">
    <img src="nubes.png" alt="Nube" className="nube nube1" />
    <img src="nubes.png" alt="Nube" className="nube nube2" />
    <img src="nubes.png" alt="Nube" className="nube nube3" />
  </div>
    <div className="container">
      <div className="avion-animado">
  <img src=" Aviónanimado.png" alt="Avión volando" />
</div>
      <h1>
        Hola, soy <span>Andrea!</span>
      </h1>
      <p>
        Licenciada en Administración de Empresas Turísticas
      </p>
        <img src="Andrea avatar.png" alt="Foto de Andrea" className="avatar" />
    </div>
  </header>
  <nav className="navbar">
    <ul>
      <li>
        <a href="#sobre-mi">Sobre mí</a>
      </li>
      <li>
        <a href="#proyectos">Proyectos</a>
      </li>
      <li>
        <a href="#contacto">Contacto</a>
      </li>
    </ul>
  </nav>
  <section id="sobre-mi" className="section">
    <div className="container">
      <h2>Sobre mí</h2>
      <p>
        Soy una persona sociable, dinámica y con una gran facilidad para conectar con los demás. Disfruto trabajar en equipo, compartir ideas y aprender de las experiencias colectivas. Me considero una líder empática, capaz de motivar a los demás y fomentar un ambiente positivo y colaborativo. Me motiva el aprendizaje constante y los desafíos que implican salir de la zona de confort, especialmente aquellos que requieren creatividad, comunicación efectiva y pensamiento estratégico. Además, me gusta involucrarme en proyectos donde pueda aportar tanto mis habilidades sociales como mi entusiasmo por crecer personal y profesionalmente.
      </p>
    </div>
  </section>
  <section id="proyectos" className="section bg-light">
  <div className="container">
    <h2>Proyectos</h2>
    <div className="projects">
      
      <div className="card">
         <a 
    href="https://github.com/ArianaSaenz/FrontEnd-Yumfull.git" 
    target="_blank" rel="noreferrer"
  >
    <button className="YumFullButton">YumFull</button>
  </a>
        <h3>Alimentación saludable y accesible</h3>
        <p>Brinda recetas personalizadas tomando referencia la situación fisica de cada persona.</p>
      </div>

      <div className="card">
        <a 
    href="https://github.com/Chris85234/becaSpot2.git" 
    target="_blank" rel="noreferrer"
  >
    <button className="YumFullButton">BecaSpot</button>
  </a>
  <h3>Impulsa tu futuro profesional</h3>
        <p> Ofrece la oportunidad de conectar tu perfil profesional con empresas, programas, etc.</p>
      </div>

      <div className="card">
        <a 
    href="https://www.figma.com/design/GjvyU9MWQTnpM9tuLuLrBR/Trip-Scout?m=auto&t=QbSPr7woyrISfgSO-6" 
    target="_blank" rel="noreferrer"
  >
    <button className="TripScout">TripScout</button>
  </a>
        <h3>Fomentar el turismo</h3>
        <p> Busca fomentar y dar a conocer más sobre el turismo salvadoreño.</p>
      </div>

    </div>
  </div>
</section>

<section id="Estudios" className="section bg-light">
  <div className="container">
    <h2>Educación</h2>
    <div className="projects">
      
     <div className="card">
  
  <h3>Programa Empresarial ¡Supérate! Hilasal</h3>
  <p>
    Ofrece educación complementaria en inglés, informática y valores, durante aproximadamente tres años, 
    con el objetivo de fomentar valores, mejorar el acceso a la educación superior y al desarrollo personal y profesional.
  </p>
</div>

      <div className="card">
      
  <h3>Complejo Educativo René Toruño Steirner</h3>
        <p> Ubicado en Ciudad Arce, La Libertad. El complejo es un centro educativo oficial de jornada matutina que ofrece niveles básicos y bachillerato técnico‑vocacional, con especialidades en mecánica industrial.</p>
      </div>
    </div>
  </div>
</section>

  <section id="contacto" className="section">
    <div className="container">
      <h2>Contacto</h2>
      <p>¿Te gustaría obtener más información? Escríbeme a:</p>
      <a href="mailto:andrea@example.com" className="email">
        andrearivera024r@gmail.com
      </a>
    </div>
  </section>




  















  <footer>
    <p>© 2025 Andrea Rivera</p>
  </footer>


    </div>
  );

}

export default App;

