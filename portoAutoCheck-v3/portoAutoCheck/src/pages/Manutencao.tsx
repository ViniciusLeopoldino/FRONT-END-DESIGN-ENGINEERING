import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import styles from '../styles/pages/Manutencao.module.css';

const Manutencao: React.FC = () => {
  const [selectedMaintenance, setSelectedMaintenance] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleMaintenanceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaintenance(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h2>Manutenções</h2>
          <div className={styles.maintenanceInfo}>
            <h3>Última manutenção</h3>
            <p>Pastilha de Freio | Data: 09/01/2024</p>
            <p>Quilometragem: 15.000 | Tipo: Corretiva</p>
            <h3>Próxima manutenção</h3>
            <p>Câmbio | Data: 01/11/2024</p>
            <p>Quilometragem: 20.000 | Tipo: Preventiva</p>
          </div>
          <section className={styles.scheduleSection}>
            <h3>Agendar nova manutenção</h3>
            <form className={styles.scheduleForm}>
              <label htmlFor="maintenance">Tipo de Manutenção:</label>
              <select id="maintenance" value={selectedMaintenance} onChange={handleMaintenanceChange}>
                <option value="">Selecione</option>
                <option value="pastilha">Pastilha de Freio</option>
                <option value="cambio">Câmbio</option>
                <option value="oleo">Óleo</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
              <label htmlFor="date">Data:</label>
              <select id="date" value={selectedDate} onChange={handleDateChange}>
                <option value="">Selecione</option>
                <option value="01/12/2024">01/12/2024</option>
                <option value="15/12/2024">15/12/2024</option>
                {/* Adicione outras datas conforme necessário */}
              </select>
              <Button type="submit">Agendar</Button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Manutencao;