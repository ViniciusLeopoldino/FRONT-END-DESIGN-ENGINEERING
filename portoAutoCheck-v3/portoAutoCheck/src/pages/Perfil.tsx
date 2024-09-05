import React from 'react';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';

const Perfil: React.FC = () => {
  return (
    <>
    <div>
      <h1>Perfil</h1>
      <div>
        <p>Dados pessoais e do veículo</p>
        <Button onClick={() => alert('Editar')}>Editar</Button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Perfil;
