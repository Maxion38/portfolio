import layout from './me.module.css'
import styles from './page1.module.css'
import glassStyles from '../../components/glass.module.css'
import myPhoto from '../../assets/myPhotoAIUpscaled.png';
import { GiWarlockEye } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { GiBurningPassion } from "react-icons/gi";


export default function Page1() {
  return (
    <section className={layout.page}>
      <div className={styles.grid}>

        {/* LEFT CARD */}
        <div className={`${glassStyles.glass} ${styles.meCard}`}>
          <div className={styles.meHeader}>
            <GiBurningPassion size="2.5rem" /> Ma passion
          </div>
          <div className={styles.meContent}>
            La programmation est une véritable passion pour moi. Elle me permet de transformer des idées en projets concrets. Depuis tout petit, mon imagination est en constante ébullition, et le développement me donne aujourd’hui les moyens de donner vie à mes idées. 
          </div>
        </div>

        {/* CENTER PROFILE */}
        <div className={styles.profile}>
          <img src={myPhoto} alt="Moi" className={styles.photo} />
          <div className={`${glassStyles.glass} ${styles.meCard}`}>
            <div className={styles.meHeader}>
              <FaUserGraduate size="2.2rem" /> Maxime Bongartz
            </div>
            <div className={styles.meContent}>
              Je suis étudiant en 3ème année de bachelier en informatique à l’EHPEC. J'ai entièrement construit et imaginé ce site portfolio dans le but de présenter ce que j'ai pu apprendre dans le cadre de ma formation et de ma passion pour l'informatique et pour expliquer comment j'ai mis cela en pratique lors de mon stage.
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={`${glassStyles.glass} ${styles.meCard}`}>
          <div className={styles.meHeader}>
            <GiWarlockEye size="2.5rem" /> Ma vision
          </div>
          <div className={styles.meContent}>
            En plus de l'informatique, je suis passioné par la photographie animalière. La forêt est un lieu que j'apprécie beaucoup par sa tranquillité et toutes les espèces que l'on peut y découvir lorsqu'on prends le temps d'observer. C'est sur cette passion que j'ai contruit ma direction artisique pour ce site, le but étant de vous faire ressentir ce sentiment agréable de paix que je peux retrouver quand je vais en forêt.
          </div>
        </div>

      </div>
    </section>
  );
}

