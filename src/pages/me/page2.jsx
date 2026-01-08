import layout from "./me.module.css";
import styles from "./page2.module.css";
import SkillCard from "../../components/skillCard";
import glassStyles from "../../components/glass.module.css";

const skills = [
  { name: "HTML / JS / CSS", level: 95, text: "..." },
  { name: "Three.js", level: 40, text: "..." },
  { name: "Python", level: 50, text: "..." },
  { name: "Git", level: 80, text: "..." },
  { name: "Firebase", level: 25, text: "..." },
  { name: "React", level: 45, text: "..." },
  { name: "React Native", level: 35, text: "..." },
  { name: "Kotlin", level: 25, text: "..." },
  { name: "Flutter", level: 75, text: "..." },
  { name: "Dart", level: 65, text: "..." },
  { name: "TypeScript", level: 35, text: "..." },
  { name: "Docker", level: 75, text: "..." },
  { name: "C++", level: 45, text: "..." },
  { name: "Angular", level: 25, text: "..." },
];

export default function Page2() {
  return (
    <section className={`${styles.page} ${styles.container}`}>
      <div className={styles.header}>
        <div className={`${glassStyles.glass} ${styles.title}`}>
          Voici les différentes technologies que j'ai pu apprendre
        </div>
      </div>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            title={skill.name}
            level={skill.level}
            text={skill.text}
          />
        ))}
      </div>
    </section>
  );
}
