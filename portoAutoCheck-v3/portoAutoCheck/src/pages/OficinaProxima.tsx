import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/pages/OficinaProxima.module.css';
import Button from '../components/Button/Button';

const OficinaProxima: React.FC = () => {
  return (
    <>
    <Header title="Oficina Próxima" />
    <div className={styles.container}>
      <form>
        <label htmlFor="cep">Digite seu CEP:</label>
        <input type="text" id="cep" name="cep" />
        <Button type="submit">Pesquisar</Button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="350"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <Button onClick={() => alert('Carregando GPS...')}>GPS</Button>
    </div>
    <Footer />
    </>
    
  );
};

export default OficinaProxima;
