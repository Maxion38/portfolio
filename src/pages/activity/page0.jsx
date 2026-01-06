import styles from './page0.module.css';
import glassStyles from '../../components/glass.module.css';
import { FaDownload } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";

export default function Page0() {
  return (
    <div className={styles.page}>
      {/* Bloc texte + stats */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Activités d’acquisition de compétences</h1>
            <p>
              Tout au long de mon cursus j'ai réalisé tout un tas d'activités qui m’ont
              permis de d'acquérir des compétences, que ce soit techniques ou humaine.
              Voici une liste qui retrace les faits marquants de mon cursus au niveau
              de mon apprentissage, vous en découvrirez plus sur ce qui m'a forgé pour
              réaliser mon stage au mieux et pour ma futur vie dans le monde 
              professionnel.
            </p>

          </article>
        </div>
        <div className={styles.row}>
          <div className={` ${glassStyles.glass} ${glassStyles.topics} `}>
            <h3><MdBookmarkAdded size={"1em"} />Compétences techniques Web</h3>
            <h3><MdBookmarkAdded size={"1em"} />Organisation</h3>
            <h3><MdBookmarkAdded size={"1em"} />Esprit d'équipe</h3>
            <h3><MdBookmarkAdded size={"1em"} />Curiosité</h3>
            <h3><MdBookmarkAdded size={"1em"} />Monde professionnel</h3>
            <h3><MdBookmarkAdded size={"1em"} />Compétences techniques mobile</h3>
          </div>

          <div className={styles.time}>
            <div className={glassStyles.glass}>
              <p className={styles.noMargin}>
                Temps total comptabilisé 
              </p>
              <strong className={styles.strong}>60h</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
