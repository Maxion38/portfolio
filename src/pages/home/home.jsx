import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'
import glassStyles from '../../components/glass.module.css'
import { BsArrowRight } from "react-icons/bs";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={`${glassStyles.glass} ${styles.title}`} style={{ width: "30%", height: '6.5%', marginTop: '3%'}}>
        Bienvenue sur mon portfolio !
      </div>

      <div className={styles.row}>
        <button  onClick={() => navigate("/me")} className={glassStyles.glassButton} style={{ width: "30%", height: '45%', display: 'flex', flexDirection: 'column', gap: '15px'}}>1. Qui je suis <div className={styles.go}>Profile <BsArrowRight fontSize={"2.2rem"} /></div></button>
        <button onClick={() => navigate("/stage")} className={glassStyles.glassButton} style={{ width: "30%", height: '45%', display: 'flex', flexDirection: 'column', gap: '15px'}}>2. Mon stage à la BGL <div className={styles.go}>Stage <BsArrowRight fontSize={"2.2rem"} /></div></button>
        <button onClick={() => navigate("/activity")} className={glassStyles.glassButton} style={{ width: "30%", height: '45%', display: 'flex', flexDirection: 'column', gap: '15px'}}>3. Mes activitées réalisées <div className={styles.go}>Activitées<BsArrowRight fontSize={"2.2rem"} /></div></button>
      </div>
    </div>
  );
}
