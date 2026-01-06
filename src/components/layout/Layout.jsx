import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Layout.module.css';
import ThreeBackground from "../ThreeBackground";

function Layout() {
  return (
    <div className={styles.app}>
        <ThreeBackground />

        <div className={styles.navbarContainer}>
          <NavBar />
        </div>

        <main className={styles.content}>
            {/* Outlet = où React Router injecte les pages */}
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;