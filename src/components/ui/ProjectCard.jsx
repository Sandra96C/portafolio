// import { ExternalLink } from "lucide-react";
import styles from "./ProjectCard.module.css";
import noImg from "../../assets/projects/noImg.png";

export default function ProjectCard({ project }) {
  const hasDemo = Boolean(project.img && project.url);

  return (
    <article className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        {project.img ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${project.title}`}
          >
            <img src={project.img} alt={project.title} />
          </a>
        ) : (
          <img src={noImg} alt={`${project.title} (sin demo pública)`} />
        )}

        {!hasDemo && (
          <span className={styles.privateBadge}>Proyecto privado</span>
        )}
      </div>

      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.badges}>
          {project.tech?.map((tech, index) => (
            <span key={index} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>

        {hasDemo && (
          <div className={styles.links}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              {/* <ExternalLink size={16} /> */}
              Ver demo
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
