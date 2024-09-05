import React from 'react';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert('Mensagem enviada!');
}

const FaleConosco: React.FC = () => {
  return (
    <div>
      <h1>Fale Conosco</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" id="nome" name="nome" placeholder="Nome" />
        <Input type="email" id="email" name="email" placeholder="E-mail" />
        <textarea id="mensagem" name="mensagem" placeholder="Deixe sua mensagem" />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default FaleConosco;
