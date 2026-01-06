import styles from './page2.module.css';
import glassStyles from '../../components/glass.module.css';
import { MdBookmarkAdded } from "react-icons/md";

export default function Page2() {
  return (
    <div className={styles.page}>     

      <div className={styles.container}>
        {/* Texts */}
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Projet d'intégration</h1>
            <p>
              Dans le cadre de mon cours de projet d’intégration en 3ᵉ année, nous avons 
              décidé, dans notre groupe de six, de réaliser un projet complexe : l’objectif 
              était de trier automatiquement de petits composants électroniques (résistances, 
              condensateurs, LED, etc.) dans leurs boîtes respectives. Ce projet a été riche 
              en découvertes, tant il y avait d’aspects à explorer et à apprendre : 
              entraînement d’une IA pour la détection des composants par image, construction 
              d’un bras robotique à l’aide d’un kit économique, programmation des moteurs, 
              création d’un site pour lancer le tri et répertorier les composants, et 
              intégration de l’ensemble afin que tout fonctionne ensemble (communication 
              site – robot – caméra IA).
            </p>
          </article>
          <article className={styles.article}>
            <h2><MdBookmarkAdded size={"1em"} />Organisation</h2>
            <p>
              Le travail réalisé a été monstrueux tant il y avait à faire. Ce projet nous a tous appris à bien communiquer, à bien répartir le travail entre nous, à organiser des réunions, à travailler certains jours ensemble et d’autres en solo. Cela m’a évidemment été très utile pour mon stage, car je me suis retrouvé à nouveau au sein d’une équipe, ce qui m’a permis d’être familier avec les outils utilisés et les méthodes de travail en groupe.
            </p>
          </article>
        </div>

        {/* Temps */}
        <div className={styles.row}>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps comptabilisé <strong className={styles.strong}>15h</strong>
            </p>
          </div>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps réel <strong className={styles.strong}>60h+</strong>
            </p>
          </div>
        </div>
      </div>


      {/* Video */}
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <iframe 
            src="https://www.youtube.com/embed/phqxWMqESNs" 
            allowFullScreen
          />
        </div>
      </div>

    </div>
  );
}
