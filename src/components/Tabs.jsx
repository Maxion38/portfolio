import styles from "./Tabs.module.css";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.navbar}>
      <div>
        <button
          onClick={() => setActiveTab("me")}
          className={`${styles.button} ${
            activeTab === "me" ? styles.active : ""
          }`}
        >
          Profile
        </button>
      </div>

      <div className={styles.right}>
        <button
          onClick={() => setActiveTab("home")}
          className={`${styles.button} ${
            activeTab === "home" ? styles.active : ""
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("stage")}
          className={`${styles.button} ${
            activeTab === "stage" ? styles.active : ""
          }`}
        >
          Stage
        </button>

        <button
          onClick={() => setActiveTab("activity")}
          className={`${styles.button} ${
            activeTab === "activity" ? styles.active : ""
          }`}
        >
          Activités
        </button>
      </div>
    </nav>
  );
}
