import { useState } from "react";
import styles from "./page3.module.css";
import glassStyles from "../../components/glass.module.css";
import { IoMdSwitch } from "react-icons/io";


export default function Page2() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.page}>  

      <div className={styles.titleZone}>
        <div className={`${styles.flipCard} ${flipped ? styles.flipped : ""}`} onClick={() => setFlipped(!flipped)}>
          <div className={styles.flipCardInner}>
            <div className={` ${styles.flipCardFront} ${glassStyles.glassButton} `}>
              <h2>Forces</h2>
              <IoMdSwitch size={"2rem"} />
            </div>
            <div className={` ${styles.flipCardBack} ${glassStyles.glassButton} `}>
              <h2>Faiblesses</h2>
              <IoMdSwitch size={"2rem"} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.textZone}>
        <div className={`${styles.textZoneFront} ${flipped ? styles.flipped : ""}`}>
          <section className={` ${glassStyles.glass} ${styles.padding} `}>
            <h2>Curiosité</h2>
            <p>
              Lors de mon stage j'ai pu faire preuve de grande curiosité de 
              part l'apprentissage et l'exploration en profondeur de Flutter 
              qui est un Framework que je n'avais jamais utilisé auparavant
              tout comme son langage de programmation Dart. En quelques
              semaines j'ai rapidement pu construire proprement un proof of 
              concept fonctionnel de l'app mobile bancaire de la banque. Ce
              que mon maitre de stage à fortement apprécié.   
            </p> 
          </section>
          <section className={` ${glassStyles.glass} ${styles.padding} `}>
            <h2>Capacité d'adaptation</h2>
            <p>
              Dès mon arrivée à la BGL, j’ai dû m’adapter rapidement à un 
              nouvel environnement de travail. On m’a fourni un MacBook, 
              alors que je n’avais jamais utilisé d’appareil Apple auparavant, 
              mais en quelques jours j’étais déjà à l’aise avec ce système. 
              J’ai également dû configurer plusieurs outils techniques, ce qui 
              ne m’a pas posé de gros problèmes grâce à mon autonomie. 
              L’installation de Flutter a été assez compliquée de part l'aspect
              très sécurisé de la banque, mais avec 
              l’aide d’une personne plus expérimentée et en comprenant bien 
              ses explications, j’ai pu avancer efficacement et surmonter 
              ces difficultés. 
            </p>
          </section>
          <section className={` ${glassStyles.glass} ${styles.padding} `}>
            <h2>Compétences techniques</h2>
            <p>
              Grâce à ma formation à l’EPHEC, je disposais de solides bases en 
              programmation, ce qui m’a permis de me lancer dans ce projet même 
              sans connaître Flutter au départ. Je maîtrisais déjà les concepts 
              généraux du développement (logique, structures, bonnes pratiques) 
              et je savais comment m’informer efficacement, lire de la 
              documentation et apprendre une nouvelle technologie de manière 
              autonome. Ces compétences m’ont permis de comprendre rapidement 
              le fonctionnement de Flutter et d’avancer de façon structurée sur 
              le projet.
            </p>
          </section>
        </div>
        <div className={`${styles.textZoneBack} ${flipped ? styles.flipped : ""}`}>
          <section className={` ${glassStyles.glass} ${styles.padding} `}>
            <h2>Communication</h2>
            <p>
              Concernant la communication, même si les échanges se sont globalement
              bien passés, j’aurais pu aller davantage vers les personnes présentes 
              autour de moi au lieu de rester avec les quelques habitués. Cela 
              s’explique par ma nature plutôt réservée. C’est un point sur lequel 
              je peux encore travailler, car savoir échanger et discuter est 
              essentiel dans le monde professionnel.
            </p>
          </section>
          <section className={` ${glassStyles.glass} ${styles.padding} `}>
            <h2>Concentration</h2>
            <p>
              Une autre faiblesse que j’ai pu identifier concerne ma motivation. 
              Parfois, la fatigue liée à un manque de sommeil a affecté mon énergie 
              et ma concentration, entraînant des moments de baisse de rythme. Je 
              pense qu’apprendre à mieux gérer mon rythme de sommeil est un point 
              important sur lequel je peux progresser.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
}
