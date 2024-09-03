import React from 'react';
import Form from '../components/Form/Form';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const ResetSenha: React.FC = () => {
  return (
    <div>
      <h1>Recuperar Senha</h1>
      <Form>
        <Input type="email" id="email" name="email" placeholder="E-mail" />
        <Input type="text" id="cpf" name="cpf" placeholder="CPF" />
        <Input type="password" id="new-password" name="new-password" placeholder="Nova Senha" />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default ResetSenha;
