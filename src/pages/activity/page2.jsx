import styles from './page2.module.css';
import glassStyles from '../../components/glass.module.css';

export default function Page2() {
  return (
    <div className={styles.page}>
      {/* Video */}
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <iframe 
            src="https://www.youtube.com/embed/phqxWMqESNs" 
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.times}>
        <div className={glassStyles.glass}>
          <p className={styles.noMargin}>
            Temps comptabilisé <strong>15h</strong>
          </p>
        </div>
        <div className={glassStyles.glass}>
          <p className={styles.noMargin}>
            Temps réel <strong>70h+</strong>
          </p>
        </div>
      </div>
      {/* Texts */}
      <div className={styles.container}>
        <div className={` ${glassStyles.glass} ${glassStyles.articlesContainer} `}>
          <article className={styles.article}>
            <h1>Projet d'intégration</h1>
            <p>
              Dans le cadre de mon cours de projet d'intégration en 3eme année, nous 
              avons décidé dans notre groupe de 6 de faire un projet complexe : le but 
              était de réussir à trier automatiquement de petits composants électroniques 
              (résistances, capacitors, led, etc) dans leurs boites respectives. Ce 
              projet à été riche en découvertes tant il y avait d'aspects à découvrir et 
              apprendre : entrainement d'une IA pour la détection par image des 
              composants, construction d'un bras robotique à l'aide d'un kit bon marché, 
              programmation des moteurs, construction d'un site pour démarrer un tri et 
              répertorier les composants et intégration de tout cela ensemble pour que le
              tout fonctionne (communication site - robot - camera IA).
            </p>
          </article>
          <article className={styles.article}>
            <h2>Expérience acquise</h2>
            <p>
              Le travail réalisé à été monstrueux tant il y avait à faire. Ce projet nous 
              a tous appris à bien communiquer, séparer proprement le travail entre nous 
              réaliser des réunions, des jours de travail ensembles d'autres en solo. Cela
              m'a évidemment été grandement utile pour mon stage étant donné que je me suis
              rentrouvé à nouveau au sein d'une équipe, ce qui fait que j'étais familier
              avec les outils utilisés et le méthodes de travail en équipe.
            </p>
          </article>
        </div>
      </div>

    </div>
  );
}
