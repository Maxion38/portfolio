import styles from './page1.module.css';
import glassStyles from '../../components/glass.module.css';
import { FaDownload } from "react-icons/fa6";

export default function Page1() {
  return (
    <div className={styles.page}>
      {/* Bloc texte + stats */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Formations au développement WEB</h1>
            <p>
              Dans le cadre de mon cours de développement informatique en première année,
              nous avons suivis 5 formations "technofutur" dans le but d'apprendre pleins
              de choses liées au développement web. L'une portait sur le développement JS,
              une sur HTML5, une sur CSS, une sur la recherche d'information sur internet
              et une sur la création d'un site web.
            </p>

            <h2>Expérience acquise</h2>
            <p>
              Ces différents thèmes sont la base pour le développement WEB et une porte
              d'entrée courante pour la programmation. Ces formations m'ont appris les
              bases de tout ce qui est nécessaire pour la suite. Sans tout cela, je
              n'aurais pas pu apprendre la programmation et je n'aurais pas été plus loin.
              De plus, cela m'a été très utile pour mon stage étant donné que je programme
              une appli mobile/web.
            </p>
          </article>
        </div>

        <div className={styles.row}>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps comptabilisé <strong className={styles.strong}>10h</strong>
            </p>
          </div>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps réel <strong className={styles.strong}>~25h</strong>
            </p>
          </div>
          <a
            href="/Mes-formations-technofutur.pdf"
            download
            className={styles.a}
          >
            <div className={glassStyles.glassButton}>
              <div className={styles.downloadRow}>
                <p className={styles.noMargin}>Attestation de suivis</p>
                <FaDownload size="1.5rem" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
