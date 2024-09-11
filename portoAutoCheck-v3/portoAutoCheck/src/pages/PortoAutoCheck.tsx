import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import styles from '../styles/pages/PortoAutoCheck.module.css';

const PortoAutoCheck: React.FC = () => {
  return (
    <>
      <Header title="Porto Auto Check" />
      <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Autoatendimento</h2>
          <div className={styles.buttons}>
            <Button>Iniciar Autodiagnóstico</Button>
            <br />
            <Button>Iniciar Auto Orçamento</Button>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </>
  );
};


export default PortoAutoCheck;
