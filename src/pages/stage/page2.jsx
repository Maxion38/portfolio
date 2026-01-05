import { useState } from "react";
import styles from "./page2.module.css";
import glassStyles from "../../components/glass.module.css";

export default function Page2() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className={styles.page}>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={styles.inner}>
          <div className={`${styles.face} ${styles.front} ${glassStyles.glassButton}`}>
            <article>
              <h1>Mes forces</h1>
              <p>
                Lors de mon stage j'ai pu faire preuve de grande curiosité de 
                part l'apprentissage et l'exploration en profondeur de Flutter 
                qui est un Framework que je n'avais jamais utilisé auparavant
                tout comme son langage Dart. En quelques semaines j'ai 
                rapidement pu construire proprement un proof of concept 
                fonctionnel de l'app mobile bancaire de la banque.   
              </p>
              <p>
                Adaptation
              </p>
            </article>
          </div>

          <div className={`${styles.face} ${styles.back} ${glassStyles.glassButton}`}>
            <article>
              <h1>Mes faiblesses</h1>
              <p>
                Communication. Lorem ipsum media res aio daomme aoosod amcum
                ipsum media res aio daomme aoosod amcum ipsum media res aio 
                daomme aoosod amcum.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
