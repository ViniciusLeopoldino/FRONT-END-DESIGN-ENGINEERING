import React, { ReactNode } from 'react';
import MenuLateral from '../MenuLateral/MenuLateral'; // Ajuste o caminho conforme necessário
import styles from './Layout.module.css'; // CSS para layout principal

interface LayoutProps {
  children: ReactNode; // Declara que o componente pode receber filhos
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MenuLateral />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;