import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import QuemSomos from './Pages/QuemSomos/index';
import Servicos from './Pages/Serviços';
import Fotos from './Pages/Fotos';
import Contatos from './Pages/Contato';
import Header from './Components/Organisms/Header/index';

function AppRoutes() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/contato" element={<Contatos />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
