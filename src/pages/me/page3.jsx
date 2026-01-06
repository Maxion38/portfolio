import { useNavigate } from 'react-router-dom';
import styles from './page3.module.css'
import glassStyles from '../../components/glass.module.css'
import { BsArrowRight } from "react-icons/bs";


export default function Page3() {
  const navigate = useNavigate();
  
  return (
    <section className={styles.page}>
      <div className={`${glassStyles.glass} ${styles.title}`}>
        Voici mon CV
      </div>
      <iframe
        src="/cv.pdf"
        className={styles.cv}
        title="PDF Viewer"
      />
      <button onClick={() => navigate("/stage")} className={`${glassStyles.glassButton} ${styles.next}`}>2. Mon stage à la BLG <div className={styles.go}>Stage <BsArrowRight fontSize={"2.2rem"} /></div></button>
    </section>
  );
}