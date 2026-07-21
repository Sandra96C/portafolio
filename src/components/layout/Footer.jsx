import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
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
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandra-colomer-castello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:3496sandra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </section>
        <section className={styles.footerLinks}>
          <div className="font-semibold">Enlaces</div>
          <div>
            <ul>
              <li>
                <a href="#about-me">Sobre mí</a>
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
          </div>
        </section>
        <section className={styles.footerContact}>
          <div id="contact" className="font-semibold">
            Contacto
          </div>
          <div>
            <p className="flex items-center gap-2">
              <MdEmail size={18} /> 3496sandra@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt size={18} /> +34 652 515 170
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt size={18} /> Valencia, España
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin size={18} /> LinkedIn
            </p>
          </div>
        </section>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2026 Sandra Colomer. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
