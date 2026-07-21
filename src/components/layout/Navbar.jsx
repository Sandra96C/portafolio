import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={`navbar ${styles.navbarContainer}`}>
      <div className="hidden md:block">
        <h2 className={styles.navbarLogo}>Sandra Colomer</h2>
        <span className={styles.navbarSubtitle}>Frontend Developer</span>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#technologies">Tecnologias</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
