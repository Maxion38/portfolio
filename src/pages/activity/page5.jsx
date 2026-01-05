import styles from './page5.module.css';
import glassStyles from '../../components/glass.module.css';
import odoo from '../../assets/odoo.png';

export default function Page5() {
  return (
    <div className={styles.page}>
      {/* Bloc PDF */}
      <div className={styles.container}>
        <img src={odoo} alt="Moi" className={styles.photo} />
      </div>

      {/* Bloc texte + stats */}
      <div className={styles.container}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Visite de odoo</h1>
            <p>
              Avec l'EPHEC nous avons eu droit à un visite des bureaux de ODOO à 
              Louvain-La-Neuve. D'une part nous avons visité les bureaux, nous avons aussi
              eu des informations sur ce qu'es l'entreprise, son histoire et comment elle
              fonctionne aujourd'hui. Nous avons aussi eu une démo : chaqu'un avec notre 
              portable avions pour objectif de récuperer du code et trouver une erreur puis
              la corriger. Pour cela nous avions à disposition plusieurs outils. 
            </p>

            <h2>Expérience acquise</h2>
            <p>
              Cette expérience était très intéressante que ce soit pour comprendre comment 
              s'organise une grosse entreprise à plusieurs miliers d'employés dans le monde.
              Ou pour tester par nous même leurs outils et moyens de travail. Cela m'a permis
              de savoir à quoi m'attendre pour mon stage étant donné que mon stage s'est fait 
              à la BGL qui est aussi une grosse entreprise à plusieurs miliers d'employés.  
            </p>
          </article>
        </div>

        <div className={styles.row}>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps comptabilisé : <strong>8h</strong>
            </p>
          </div>
          <div className={glassStyles.glass}>
            <p className={styles.noMargin}>
              Temps réel : <strong>8h</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
