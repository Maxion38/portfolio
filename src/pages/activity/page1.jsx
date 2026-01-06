import styles from './page1.module.css';
import glassStyles from '../../components/glass.module.css';
import { FaDownload } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";

export default function Page1() {
  return (
    <div className={styles.page}>
      {/* Bloc texte + stats */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Formations au développement Web</h1>
            <p>
              Dans le cadre de mon cours de développement informatique en première année, 
              nous avons suivi cinq formations proposées par Technofutur, visant à 
              acquérir des compétences variées liées au développement web. Une formation 
              portait sur JavaScript, une autre sur HTML5, une sur CSS, une sur la 
              recherche d’informations sur Internet et enfin une sur la création d’un 
              site web.
            </p>

            <h2><MdBookmarkAdded size={"1em"} />Compétences techniques Web</h2>
            <p>
              Ces différents thèmes constituent les bases du développement web et sont 
              une première approche de la programmation. Ces formations m’ont permis 
              d’acquérir des connaissances essentielles pour progresser par la suite. 
              Sans elles, il m’aurait été difficile d’aller plus loin dans l’apprentissage 
              de la programmation. Elles m’ont également été très utiles pour mon stage, 
              où je développe une application mobile et web et où je dois effectuer des 
              recherches efficaces sur Internet pour me documenter.
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
