import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./Styles/_global.scss"; // Importando o SCSS normalmente

const App = () => {
  return (
    <BrowserRouter>
      <div className="appContainer"> {/* Usando a classe diretamente */}
        <main className="mainContent">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
