import styles from './page1.module.css'
import glassStyles from '../../components/glass.module.css'


export default function Page1() {
  return (
    <section className={styles.page}>
        <div className={glassStyles.glass}>
          <article className={styles.article}>
            <h1>Mon projet professionnel</h1>
            <p>
              Pour mon stage j'ai postulé à la BGL qui est une banque au Luxembourg. 
              L'entreprise compte plusieurs milliers d'employés. Lors de ce stage j'ai été
              amméné à découvrir Flutter qui est un Framework qui permet de coder une seule
              fois pour compiler sur plusieurs plateformes. La section informatique 
              s'intéresse donc à cette technologie parce que celle-ci pourrait leurs offrir
              un gain de temps et de facilité étant donné qu'à l'heure actuelle il existe 
              une codebase pour IOS, une pour Android et une pour le Web. Flutter pourrait 
              permettre de n'en avoir plus que une au total. Et donc ma mission a été 
              d'explorer cette technologie un créant un POC de leur application mobile et de
              faire de recherches pour voir si oui ou non cette technologie peut leur être 
              utile.
            </p>
          </article>
        </div>
    </section>
  );
}

