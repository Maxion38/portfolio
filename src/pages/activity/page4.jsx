import styles from './page4.module.css';
import glassStyles from '../../components/glass.module.css';
import MPPhoto from '../../assets/Mathieu-Petieau-transparent.png';

export default function Page4() {
  return (
    <div className={styles.page}>

      {/* text */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Conférence de Mathieu Petieau</h1>
            <p>
              Dans le cadre de mon cours de traitements des signaux en 3eme année, nous 
              avons assisté à une conférence de la part de Mathieu Petieau. Cette 
              conférence m'a marqué de part la prestation de Mr Petieau et aussi parce 
              qu'elle abordait un sujet très intéressant : les signaux 
              électroencéphalogramme. Ce sont des signaux que notre cerveau émets et qui
              sont différents en fonction de notre activité. Ces signaux, Mr Petieau à
              pu les intercepter sur un élève grace à un appreil disposé sont sa tête.
              L'élève à alors pu faire décoller un drone connecté au système, uniquement
              grâce à sa pensé. Il s'est détendu et l'appareil à alors détecté cela et 
              lancé la commande de décollage du drone.  
            </p>

            <h2>Expérience acquise</h2>
            <p>
              J'ai adoré le sujet abordé et cela m'a permis d'étendre ma curiosité. Durant
              mon stage je me suis rendu compte que la curiosité est un élément imortant 
              en informatique tant il y a de technologies existantes qui existe. Durant mon
              stage par exemple j'ai été missionné d'explorer la technologie Flutter que je
              ne connaissait pas. Ma curiosité m'a alors permis d'approfondir beaucoup le 
              sujet et apporter des éléments important pour l'entreprise quant à cette 
              technologie.
            </p>

            <h2>Attestation</h2>
            <p>
              Je n'ai pas trouvé de preuve de présence mais cette conférence à fait partie du
              cours de traitements de signaux et il y avait une question sur cette conférence
              dans dans l'examen. 
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
        </div>
      </div>
      
      {/* image */}
      <div className={styles.container}>
        <img src={MPPhoto} alt="Moi" className={styles.photo} />
      </div>
    </div>
  );
}
