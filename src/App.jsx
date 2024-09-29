import React from "react";

import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import styles from "./Styles/_global.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
       
        <main className={styles.mainContent}>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
