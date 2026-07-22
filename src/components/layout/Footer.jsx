import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <section className={styles.footerSection}>
          <div>
            <h3>Sandra Colomer</h3>
            <span>Desarrolladora Web</span>
          </div>
          <div className={styles.footerDescription}>
            Me encanta crear experiencias web modernas, accesibles y centradas
            en el usuario.
          </div>
          <div className={styles.footerSocial}>
            <a
              href="https://github.com/Sandra96C"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandra-colomer-castello/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:3496sandra@gmail.com" aria-label="Email">
              <MdEmail size={20} />
            </a>
          </div>
        </section>

        <section className={styles.footerContact} id="contact">
          <div className={styles.footerHeading}>Contacto</div>
          <div className={styles.footerContactList}>
            <a href="mailto:3496sandra@gmail.com">
              <MdEmail size={18} /> 3496sandra@gmail.com
            </a>
            <a href="tel:+34652515170">
              <FaPhoneAlt size={16} /> +34 652 515 170
            </a>
            <span>
              <FaMapMarkerAlt size={18} /> Valencia, España
            </span>
            <a
              href="https://www.linkedin.com/in/sandra-colomer-castello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>

        <section className={styles.footerLinks}>
          <div className={styles.footerHeading}>Enlaces</div>
          <ul>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#technologies">Tecnologías</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </section>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 Sandra Colomer. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
