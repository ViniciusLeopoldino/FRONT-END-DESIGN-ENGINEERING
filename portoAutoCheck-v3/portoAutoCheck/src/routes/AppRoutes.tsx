import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Perfil from '../pages/Perfil';
import Manutencao from '../pages/Manutencao';
import OficinaProxima from '../pages/OficinaProxima';
import FaleConosco from '../pages/FaleConosco';
import IntegrantesPage from '../pages/Integrantes';
import ResetSenha from '../pages/ResetSenha';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
        <Route path="/manutencao" element={<Layout><Manutencao /></Layout>} />
        <Route path="/oficina-proxima" element={<Layout><OficinaProxima /></Layout>} />
        <Route path="/fale-conosco" element={<Layout><FaleConosco /></Layout>} />
        <Route path="/integrantes" element={<Layout><IntegrantesPage /></Layout>} />
        <Route path="/ResetSenha" element={<ResetSenha />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
