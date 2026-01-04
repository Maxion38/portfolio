import { useState } from "react";
import styles from "./skillCard.module.css";
import glassStyles from "./glass.module.css";

export default function SkillCard({ title, level, text }) {
  const [flipped, setFlipped] = useState(false);
  const width = level * 5.5;
  const height = 180;

  const handleClick = () => {
    setFlipped(!flipped); // inverse l'état à chaque clic
  };

  return (
    <div
      className={styles.flipCard}
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClick}
    >
      <div
        className={`${styles.flipCardInner} ${flipped ? styles.flipped : ""}`}
      >
        {/* Face avant */}
        <div className={`${glassStyles.glassButton} ${styles.flipCardFront}`}>
          <span className={styles.name}>{title}</span>
        </div>

        {/* Face arrière */}
        <div className={`${glassStyles.glassButton} ${styles.flipCardBack}`}>
          <span className={styles.name}>{text}</span>
        </div>
      </div>
    </div>
  );
}
