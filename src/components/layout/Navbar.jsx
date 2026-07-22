import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);

  return (
    <div className={`navbar ${styles.navbarContainer}`}>
      <div className={styles.navbarBrand}>
        <h2 className={styles.navbarLogo}>Sandra Colomer</h2>
        <span className={styles.navbarSubtitle}>Frontend Developer</span>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={showMenu}
      >
        <span
          className={`${styles.iconWrapper} ${showMenu ? styles.iconOpen : ""}`}
        >
          <GiHamburgerMenu size={24} className={styles.hamburgerIcon} />
          <RxCross2 size={24} className={styles.closeIcon} />
        </span>
      </button>

      <nav className={`${styles.navbar} ${showMenu ? styles.navbarOpen : ""}`}>
        <ul className={styles.navbarLinks}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
