import styles from './page1.module.css'
import GlassDiv from '../../components/ui/glass/GlassDiv';
import pageLayout from '../../components/layout/PageLayout.module.css'


export default function Page1() {
  return (
    // <div className={pageLayout.page}>
    <div className={styles.page}>
      <GlassDiv>
        <article className={styles.article}>
          <h1>Mon projet professionnel</h1>
          <p>
            Pour mon stage, j’ai postulé à la BGL, une banque située au Luxembourg, qui compte plusieurs milliers d’employés.
          </p>
          <p>
            Lors de ce stage, j’ai été amené à découvrir Flutter, un framework permettant de développer une application à partir d’une seule base de code pour plusieurs plateformes.
          </p>
          <p>
            Le service informatique s’intéresse à cette technologie, car elle pourrait leur offrir un gain de temps et de simplicité. En effet, à l’heure actuelle, l’entreprise maintient une base de code distincte pour iOS, une pour Android et une pour le Web. Flutter pourrait permettre de réduire cela à une seule base de code.
          </p>
          <p>
            Ma mission a donc été d’explorer cette technologie en réalisant un POC (Proof of Concept) de leur application mobile, ainsi que de mener des recherches afin d’évaluer si Flutter pouvait répondre à leurs besoins.
          </p>
        </article> 
      </GlassDiv>
    </div>
  );
}
