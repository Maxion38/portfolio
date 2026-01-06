// src/components/layout/NavBar.jsx
import { useNavigate, useLocation  } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div>
        <button onClick={() => navigate('/me')} className={`${styles.button} ${isActive('/me') ? styles.active : ''}`}>
          Profile
        </button>
      </div>

      <div className={styles.right}>
        <button onClick={() => navigate('/')} className={`${styles.button} ${isActive('/') ? styles.active : ''}`}>
          Accueil
        </button>
        <button onClick={() => navigate('/stage')} className={`${styles.button} ${isActive('/stage') ? styles.active : ''}`}>
          Stage
        </button>
        <button onClick={() => navigate('/activity')} className={`${styles.button} ${isActive('/activity') ? styles.active : ''}`}>
          Activitées
        </button>
      </div>
    </nav>
  );
}

export default NavBar;