import styles from "./ProjectCard.module.css";
import noImg from "../../assets/projects/noImg.png";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      {project.img ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.img} alt={project.title} />
        </a>
      ) : (
        <a rel="noopener noreferrer">
          <img src={noImg} alt={project.title} />
        </a>
      )}
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
      </div>
    </article>
  );
}
