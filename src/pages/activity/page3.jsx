import styles from './page3.module.css';
import glassStyles from '../../components/glass.module.css';
import { FaDownload } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";

export default function Page3() {
  return (
    <div className={styles.page}>
      {/* Bloc YTB */}
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <iframe 
            src="https://www.youtube.com/embed/dW1G2kZSft0" 
            allowFullScreen
          />
        </div>
      </div>

      {/* Bloc texte + stats */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Expérience internationale</h1>
            <p>
              Dans le cadre de mon cours « semaine internationale », j'ai pu partir en Finlande à l'école SAMK Campus Pori pour réaliser un projet réunissant des électromécaniciens et des développeurs afin de construire un cart équipé d’un programme lui permettant de se garer de manière autonome dans un emplacement. Nous étions une équipe de deux programmeurs et trois électromécaniciens. J'ai adoré ce projet et notre cart a bel et bien réussi à se garer.
            </p>

            <h2><MdBookmarkAdded size={"1em"} />Esprit d'équipe</h2>
            <p>
              Encore une fois, le travail d’équipe était très important, d’autant plus que nous parlions tous en anglais puisque nous étions avec deux élèves de la SAMK Pori. L’ambiance était géniale, car après le travail nous partions faire des activités en Finlande, ce qui renforçait chaque jour davantage notre équipe. C’est là que j’ai appris qu’être dans une équipe où tout le monde s’entend bien est primordial. Je fais un parallèle entre cette expérience et le team building que j’ai pu vivre avec mon équipe durant mon stage.
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
              Temps réel <strong className={styles.strong}>30h</strong>
            </p>
          </div>
          <a
            href="/attestation-BIP.pdf"
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
