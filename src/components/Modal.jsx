import styles from './Modal.module.css';
import glassStyles from './glass.module.css';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={` ${styles.modalContent} ${glassStyles.glass}`} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className={glassStyles.glassButton}>Fermer</button>
      </div>
    </div>
  );
}