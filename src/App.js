
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
        Soy una persona sociable, dinámica y con gran facilidad para conectar con los demás. Disfruto trabajar en equipo y liderar grupos. Me motiva el aprendizaje constante y los desafíos que requieren creatividad y comunicación.
      </p>
    </div>
  </section>
  <section id="proyectos" className="section bg-light">
  <div className="container">
    <h2>Proyectos</h2>
    <div className="projects">
      
      <div className="card">
        <a href="https://github.com/ArianaSaenz/FrontEnd-Yumfull.git" target="_blank" rel="noopener noreferrer">
          <img src="proyecto1.jpg" alt="YumFull" className="YumFull" />
        </a>
        <h3>Alimentación saludable y accesible</h3>
        <p><strong>Descripción:</strong> Brinda recetas personalizadas tomando referencia la situación fisica de cada persona.</p>
      </div>

      <div className="card">
        <a href="https://github.com/Chris85234/becaSpot2.git" target="_blank" rel="noopener noreferrer">
          <img src="proyecto2.jpg" alt="BecaSpot" className="project-img" />
        </a>
        <h3>Impulsa tu futuro profesional</h3>
        <p><strong>Descripción:</strong> Ofrece la oportunidad de conectar tu perfil profesional con empresas, programas, etc.</p>
      </div>

      <div className="card">
        <a href="https://mi-sitio-ejemplo.com/proyecto3" target="_blank" rel="noopener noreferrer">
          <img src="proyecto3.jpg" alt="Proyecto 3" className="project-img" />
        </a>
        <h3>Nosé</h3>
        <p><strong>Descripción:</strong> Noséaún</p>
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
    <p>© 2025 Andrea. Todos los derechos reservados.</p>
  </footer>


    </div>
  );

}

export default App;

