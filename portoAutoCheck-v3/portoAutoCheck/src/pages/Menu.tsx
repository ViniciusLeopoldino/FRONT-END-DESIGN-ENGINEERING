import React from 'react';

const Menu: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>
      <button onClick={() => alert('Navegar para página')}>Navegar</button>
    </div>
  );
};

export default Menu;
