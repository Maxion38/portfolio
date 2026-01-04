import { useState } from "react";
import styles from "./MainLayout.module.css";

import ThreeBackground from "../components/ThreeBackground";
import Tabs from "../components/Tabs";

import Home from "../pages/home/home";
import Me from "../pages/me/me";
import Stage from "../pages/stage/stage";
import Activity from "../pages/activity/activity";

export default function MainLayout() {

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className={styles.app}>
      <ThreeBackground />

      <div className={styles.navbarContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className={styles.content}>
        {activeTab === "home" && (
          <Home setActiveTab={setActiveTab} />
        )}

        {activeTab === "me" && (
          <Me setActiveTab={setActiveTab} />
        )}

        {activeTab === "stage" && (
          <Stage setActiveTab={setActiveTab} />
        )}

        {activeTab === "activity" && (
          <Activity setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
}
