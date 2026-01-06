import styles from './page4.module.css';
import glassStyles from '../../components/glass.module.css';
import MPPhoto from '../../assets/Mathieu-Petieau-transparent.png';
import { MdBookmarkAdded } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";

export default function Page4({ onOpenModal }) {
  return (
    <div className={styles.page}>
      {/* text */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Conférence de Mathieu Petieau</h1>
            <p>
              Dans le cadre de mon cours de traitement des signaux en 3ᵉ année, nous avons assisté à une conférence donnée par Mathieu Petieau. Cette conférence m'a marqué, tant par la prestation de M. Petieau que par le sujet très intéressant abordé : les signaux électroencéphalogramme (EGG). Ce sont des signaux émis par notre cerveau et qui varient en fonction de notre activité. M. Petieau a pu capter ces signaux sur un élève grâce à un appareil placé sur sa tête. L'élève a alors pu faire décoller un drone connecté au système, uniquement par la pensée : lorsqu'il s'est détendu, l'appareil a détecté ce changement et a lancé la commande de décollage du drone. 
            </p>

            <h2><MdBookmarkAdded size={"1em"}/>Curiosité</h2>
            <p>
              J'ai adoré le sujet abordé et cela m'a permis de développer ma curiosité. Durant mon stage, je me suis rendu compte que la curiosité est un élément important en informatique, tant il existe de technologies différentes. J'ai été missionné pour explorer la technologie Flutter que je ne connaissais pas. Ma curiosité m'a alors permis d'approfondir le sujet et d'apporter des éléments importants pour l'entreprise concernant cette technologie.
            </p>
          </article>
        </div>

        <div className={styles.row}>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps comptabilisé <strong className={styles.strong}>2h</strong>
            </p>
          </div>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps réel <strong className={styles.strong}>2h</strong>
            </p>
          </div>
          <div className={glassStyles.glassButton} onClick={onOpenModal}>
            <div className={styles.downloadRow}>
              <p className={styles.noMargin}>Attestation de suivis</p>
              <IoInformationCircleSharp size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
      
      {/* image */}
      <div className={styles.container}>
        <img src={MPPhoto} alt="Moi" className={styles.photo} />
      </div>
    </div>
  );
}