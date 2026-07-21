import styles from "./Hero.module.css";
import profileImage from "../assets/profile/perfil.jpg";

export function Hero() {
  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.heroGreeting}>Hola, soy</span>

          <h1 className={styles.heroTitle}>
            <span>Sandra Colomer</span>
            <br />
            Desarrolladora Front-end
          </h1>

          <p className={styles.heroDescription}>
            Especializada en Angular y TypeScript con más de 3 años de
            experiencia creando aplicaciones web escalables y centradas en la
            experiencia del usuario.
          </p>

          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.primaryButton}>
              Ver proyectos
            </a>

            <a
              href="/SandraColomer_cv.pdf"
              target="_blank"
              download="SandraColomer_cv.pdf"
              className={styles.secondaryButton}
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={profileImage} alt="Sandra Colomer" />
        </div>
      </div>
    </section>
  );
}
