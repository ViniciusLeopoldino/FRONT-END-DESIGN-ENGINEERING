import React from 'react';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const Registro: React.FC = () => {
  return (
    <div>
      <h1>Registro</h1>
      <Form>
        <Input type="text" id="name" name="name" placeholder="Nome" />
        <Input type="text" id="email" name="email" placeholder="E-mail" />
        <Input type="text" id="vehicle" name="vehicle" placeholder="Veículo" />
        <Button type="submit">Registrar</Button>
        <Button type="button" onClick={() => alert('Voltar')}>Voltar</Button>
      </Form>
    </div>
  );
};

export default Registro;
