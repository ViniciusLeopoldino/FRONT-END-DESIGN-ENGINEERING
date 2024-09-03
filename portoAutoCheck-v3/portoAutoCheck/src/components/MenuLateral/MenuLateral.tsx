import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../MenuLateral/MenuLateral.module.css'; // Ajuste o caminho conforme necessário

const MenuLateral: React.FC = () => {
  return (
    <nav className={styles.menuLateral}>
      <div className={styles.logo}>
        <img src="../img/Logo_PortoSeguro_menu.svg" alt="Logo" />
      </div>
      <ul className={styles.menuItems}>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/manutencao">Manutenção</Link></li>
        <li><Link to="/oficina-proxima">Oficina Próxima</Link></li>
        <li><Link to="/fale-conosco">Fale Conosco</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
      </ul>
    </nav>
  );
};

export default MenuLateral;

