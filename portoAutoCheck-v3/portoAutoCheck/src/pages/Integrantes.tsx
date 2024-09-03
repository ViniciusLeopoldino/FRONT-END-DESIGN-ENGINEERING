import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Integrantes from '../components/Integrantes/Integrantes';
import styles from '../styles/pages/Integrantes.module.css';

const integrantesData = [
  {
    name: 'Diego Santos',
    rm: '558711',
    image: '../img/Diego.jpeg',
    github: 'https://github.com/sashabiceps',
    linkedin: 'https://www.linkedin.com/in/diego-santos-cardoso-51329430b/',
  },
  {
    name: 'Pablo Lopes',
    rm: '556834',
    image: '../img/Pablo.jpeg',
    github: 'https://github.com/Pablo0703',
    linkedin: 'https://www.linkedin.com/in/pablo-lopes-09a66a275/',
  },
  {
    name: 'Vinicius Leopoldino',
    rm: '557047',
    image: '../img/Vinicius.jpg',
    github: 'https://github.com/ViniciusLeopoldino',
    linkedin: 'https://www.linkedin.com/in/vinicius-leopoldino-de-oliveira-9a2194120/',
  },
];

const IntegrantesPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Integrantes integrantes={integrantesData} />
      </main>
      <Footer />
    </>
  );
};

export default IntegrantesPage;
