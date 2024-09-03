import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/MenuLateral/MenuLateral'; // Ajuste o caminho conforme necessário
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Perfil from '../pages/Perfil';
import PortoAutoCheck from '../pages/PortoAutoCheck';
import Manutencao from '../pages/Manutencao';
import OficinaProxima from '../pages/OficinaProxima';
import FaleConosco from '../pages/FaleConosco';
import IntegrantesPage from '../pages/Integrantes';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/porto-auto-check" element={<PortoAutoCheck />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/oficina-proxima" element={<OficinaProxima />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/integrantes" element={<IntegrantesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;