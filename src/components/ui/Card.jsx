import styles from "./Card.module.css";

export default function Card({ experience }) {
  const Icon = experience.icon;
  return (
    <div className={styles.card}>
      <Icon className={styles.icon} />

      <h3>{experience.title}</h3>
      <p>{experience.description}</p>
    </div>
  );
}
