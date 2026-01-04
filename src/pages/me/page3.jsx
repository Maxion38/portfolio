import styles from './page3.module.css'
import glassStyles from '../../components/glass.module.css'
import { BsArrowRight } from "react-icons/bs";


export default function Page3({ setActiveTab }) {
  return (
    <section className={styles.page}>
      <div className={`${glassStyles.glass} ${styles.title}`}>
        Voici mon CV avec lequel j'ai eu mon stage.
      </div>
      <iframe
        src="/cv.pdf"
        className={styles.cv}
        title="PDF Viewer"
      />
      <button onClick={() => setActiveTab("stage")} className={`${glassStyles.glassButton} ${styles.next}`}>2. Mon stage à la BLG <div className={styles.go}>Stage <BsArrowRight fontSize={"2.2rem"} /></div></button>
    </section>
  );
}
