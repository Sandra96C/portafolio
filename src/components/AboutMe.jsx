import { CodeXml, Puzzle, UsersRound, GraduationCap } from "lucide-react";
import Card from "./ui/Card.jsx";
import styles from "./AboutMe.module.css";

export function AboutMe() {
  const experiences = [
    {
      icon: CodeXml,

      title: "Desarrollo Frontend",
      description:
        "Experiencia con Angular, TypeScript, JavaScript, React HTML y CSS.",
    },
    {
      icon: Puzzle,
      title: "Resolución de problemas",
      description:
        "Me gusta analizar, investigar y encontrar la mejor solución para cada reto.",
    },
    {
      icon: UsersRound,
      title: "Trabajo en equipo",
      description:
        "He trabajado en equipos ágiles utilizando Scrum, Jira, Git y buenas prácticas.",
    },
    {
      icon: GraduationCap,
      title: "Aprendizaje continuo",
      description:
        "Siempre estoy aprendiendo nuevas tecnologías para seguir creciendo.",
    },
  ];
  return (
    <div id="aboutMe" className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <h2 className="sectionTitle">Sobre mí</h2>
        <p className={styles.textCenter}>
          Soy desarrolladora web, apasionada por crear soluciones eficientes,
          accesibles y con buen diseño. Me gusta aprender cosas nuevas,
          enfrentarme a retos y trabajar en equipo para construir productos que
          realmente aporten valor.
        </p>
      </div>
      <div className={styles.aboutGrid}>
        {experiences.map((exp, index) => {
          return (
            <div key={index}>
              <Card experience={exp} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
