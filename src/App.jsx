import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./Styles/_global.scss"; // Importando o SCSS normalmente
import Footer from "./Components/Organisms/Footer";
import Direitos from "./Components/Atoms/Direitos";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appContainer"> {/* Usando a classe diretamente */}
        <main className="mainContent">
          <AppRoutes />
        </main>
        <Footer/>
        <Direitos/>
      </div>
    </BrowserRouter>
  );
};

export default App;
