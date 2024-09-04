import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/pages/Login.module.css';
import loginImage from '../components/img/Logo_PortoSeguro.svg'; 
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para autenticação aqui, se necessário
    navigate('/menu'); // Redireciona para a página de menu após o login
  };

  const handleRegister = () => {
    navigate('/Registro'); // Redireciona para a página de registro
  };

  const handleResetPassword = () => {
    navigate('/ResetSenha'); // Redireciona para a página de recuperação de senha
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={loginImage} alt="Login" className={styles.loginImage} />
      </header>
      <main className={styles.main}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={styles.buttonGroup}>
            <Button type="submit">Entrar</Button>
            <Button type="button" onClick={handleRegister}>Registrar</Button>
            <br />
            <Button type="button" onClick={handleResetPassword}>Recuperar Senha</Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Login;

