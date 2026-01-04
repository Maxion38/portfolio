import layout from './me.module.css'
import styles from './page3.module.css'
import glassStyles from '../../components/glass.module.css'


export default function Page3() {
  return (
    <section className={layout.page}>
      <iframe
        src="/cv.pdf"
        className={styles.cv}
        title="PDF Viewer"
      />
    </section>
  );
}

