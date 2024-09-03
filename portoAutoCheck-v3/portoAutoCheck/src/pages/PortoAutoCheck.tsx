import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import styles from '../styles/pages/PortoAutoCheck.module.css';

const PortoAutoCheck: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Autoatendimento</h2>
          <div className={styles.buttons}>
            <Button href="/auto-diag.html">Iniciar Autodiagnóstico</Button>
            <Button href="/auto-orc.html">Iniciar Auto Orçamento</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortoAutoCheck;
