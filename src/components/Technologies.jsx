import angular from "../assets/technologies/angular.png";
import typescript from "../assets/technologies/typeScript.png";
import javaScript from "../assets/technologies/javaScript.png";
import react from "../assets/technologies/react.png";
import django from "../assets/technologies/django.png";
import nodejs from "../assets/technologies/nodejs.png";
import mongoDB from "../assets/technologies/mongoDB.png";
import git from "../assets/technologies/git.png";
import docker from "../assets/technologies/docker.png";
import styles from "./Technologies.module.css";

export const technologyImages = {
  angular,
  typescript,
  javaScript,
  react,
  django,
  nodejs,
  mongoDB,
  git,
  docker,
};

export function Technologies() {
  const technologies = [
    { name: "Angular", img: angular },
    { name: "TypeScript", img: typescript },
    { name: "JavaScript", img: javaScript },
    { name: "React", img: react },
    { name: "Django", img: django },
    { name: "Node.js", img: nodejs },
    { name: "MongoDB", img: mongoDB },
    { name: "Git", img: git },
    { name: "Docker", img: docker },
  ];

  return (
    <div id="technologies" className={styles.container}>
      <h2 className="sectionTitle">Tecnologías</h2>
      <div className={styles.technologiesGrid}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.techItem}>
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
