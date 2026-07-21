import ProjectCard from "./ui/ProjectCard";
import talleresRiberoImg from "../assets/projects/talleresRibero.png";
import lyndayImg from "../assets/projects/lynday.png";
import styles from "./Projects.module.css";

export function Projects() {
  const projects = [
    {
      img: lyndayImg,
      url: "https://frontend-lynday-okwi.vercel.app/admin/",
      title: "CRUD MERN",
      description:
        "Aplicación fullstack para la gestión de tareas con autenticación JWT y operaciones CRUD.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Sandra96C/backend-products",
    },
    {
      img: talleresRiberoImg,
      url: "https://taller-ribero.vercel.app/",
      title: "Talleres Ribero",
      description:
        "Sitio web corporativo desarrollado con Astro. Diseño responsive y optimizado para SEO.",
      tech: ["Astro", "HTML", "CSS"],
      github: "https://github.com/Sandra96C/taller-ribero",
    },
    {
      title: "Dashboard interno",
      description:
        "Intranet para la digitalización de procesos de negocio. Desarrollando nuevas funcionalidades y mejoras de usabilidad.",
      tech: ["Django", "JQuery", "PostgreSQL", "CSS"],
    },
    {
      title: "CRM con Angular",
      description:
        "Aplicación para la gestión de clientes, integración con APIs REST y pasarelas de pago.",
      tech: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Symfony"],
    },
  ];
  return (
    <div id="projects" className={styles.projectsSection}>
      <div className="sectionTitle">
        <h2>Proyectos destacados</h2>
        <span></span>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
