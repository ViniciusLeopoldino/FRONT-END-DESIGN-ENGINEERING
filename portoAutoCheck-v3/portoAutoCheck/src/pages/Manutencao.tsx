import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import styles from '../styles/pages/Manutencao.module.css';

const Manutencao: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Manutenções</h2>
          <Button href="/agendar-manutencao.html">Agendar nova manutenção</Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Manutencao;
