import React, { ReactNode } from 'react';
import styles from './Form.module.css';

interface FormProps {
  children: ReactNode; // Define o tipo dos filhos
}

const Form: React.FC<FormProps> = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

export default Form;

