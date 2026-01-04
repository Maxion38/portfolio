import layout from "./me.module.css";
import styles from "./page2.module.css";
import SkillCard from "../../components/skillCard";
import glassStyles from "../../components/glass.module.css"

const skills = [
  { name: "HTML / JS / CSS", level: 95, text: "C'est avec ces trois langages que j'ai commencé à apprendre le développement à l'EPHEC. Ces trois langages je les utilisent très souvent étant donné qu'il sont extremement utilisé pour le web, que ce soit en natif ou par les autres Framework" },
  { name: "Three.js", level: 40, text: "En faisant ce site j'ai appris à faire de la 3D sur le web grâce à Three JS" },
  { name: "Python", level: 50, text: "hey" },
  { name: "Git", level: 80, text: "C'est la base, je l'utilise d'office lorque je lance un projet. D'ailleurs voici le liens vers mon github avec tout mes projets (certains ne sont pas visibles)." },
  { name: "Firebase", level: 25, text: "hey" },

  { name: "React", level: 45, text: "hey" },
  { name: "React Native", level: 35, text: "hey" },
  { name: "Kotlin", level: 25, text: "hey" },
  { name: "Flutter", level: 75, text: "hey" },
  { name: "Dart", level: 65, text: "hey" },

  { name: "TypeScript", level: 35, text: "hey" },
  { name: "Docker", level: 75, text: "hey" },
  { name: "C++", level: 45, text: "hey" },
  { name: "Angular", level: 25, text: "hey" },

];

export default function Page2() {
  return (
  <section className={`${layout.page} ${styles.container}`}>
    <div className={styles.row}>
      <div className={`${glassStyles.glass} ${styles.title}`}>
        Voici les différentes technologies que j'ai pu apprendre. Retournez la carte pour en savoir plus.
      </div>
    </div>

    {(() => {
      const rows = [];
      const rowSizes = [5, 5, 4]; // cards per row

      let startIndex = 0;
      rowSizes.forEach((size) => {
        const rowSkills = skills.slice(startIndex, startIndex + size);
        rows.push(
          <div className={styles.row} key={startIndex}>
            {rowSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                title={skill.name}
                level={skill.level}
                text={skill.text}
              />
            ))}
          </div>
        );
        startIndex += size;
      });

      return rows;
    })()}
  </section>
  );
}
