import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../MenuLateral/MenuLateral.module.css'; 
import logo from '../img/Logo_PortoSeguro_menu.svg'; 

const MenuLateral: React.FC = () => {
  return (
    <nav className={styles.menuLateral}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.menuItems}>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/manutencao">Manutenção</Link></li>
        <li><Link to="/oficina-proxima">Oficina Próxima</Link></li>
        <li><Link to="/fale-conosco">Fale Conosco</Link></li>
        <li><Link to="/">Sair</Link></li>
        <br></br>
        <li><Link to="/integrantes">Integrantes</Link></li>
      </ul>
    </nav>
  );
};

export default MenuLateral;

