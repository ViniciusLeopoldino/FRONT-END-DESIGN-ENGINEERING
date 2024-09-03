import React from 'react';

const OficinaProxima: React.FC = () => {
  return (
    <div>
      <h1>Oficina Mais Próxima</h1>
      <form>
        <label htmlFor="cep">Digite seu CEP:</label>
        <input type="text" id="cep" name="cep" />
        <button type="submit">Pesquisar</button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="350"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <button onClick={() => alert('Carregando GPS...')}>GPS</button>
    </div>
  );
};

export default OficinaProxima;
