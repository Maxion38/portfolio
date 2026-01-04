import styles from './page3.module.css';
import glassStyles from '../../components/glass.module.css';
import { FaDownload } from "react-icons/fa6";


export default function Page3() {
  return (
    <div className={styles.page}>
      {/* Bloc PDF */}
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
              Dans le cadre de mon cours "semaine internationale", j'ai pu partir en
              Finlande dans l'école "SAMK Campus Pori" pour réaliser un projet qui lie des
              électromécaniciens et des développeurs ensemble pour construire un cart 
              avec un programme lui permettant de se parquer de manière autonaume dans un 
              emplacement. Nous étions une équipe de 2 programmeurs et 3 électromécaniciens.
              J'ai adoré la projet et notre cart à bel et bien réussi à se parquer.
            </p>

            <h2>Expérience acquise</h2>
            <p>
              Encore une fois le travail d'équipe était très important d'autant plus que 
              nous parlions tous dans une autre langue que notre langue maternelle (Anglais)
              étant donné nous étions avec 2 éleves de la SAMK Pori. Mais l'ambiance était
              géniale parce que après le travail nous partions faire des activitées en 
              Finlande ce qui renforcait tous les jours plus notre équipe. C'est là que 
              j'apprends qu'être dans une équipe ou tout le monde s'entends bien est 
              primordial. Je fais un parralèlle avec cette histoire et le team building que 
              j'ai pu faire avec mon équipe durant mon stage. 
            </p>
          </article>
        </div>

        <div className={styles.row}>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps comptabilisé : <strong>10h</strong>
            </p>
          </div>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps réel : <strong>30h</strong>
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
