import React from 'react';
import Perfil from './Perfil';
import './Galeria.css';

function Galeria() {
  const users = [
    { name: 'Alice', imageUrl: 'https://via.placeholder.com/100' },
    { name: 'Bob', imageUrl: 'https://via.placeholder.com/100' },
    { name: 'Charlie', imageUrl: 'https://via.placeholder.com/100' }
  ];

  return (
    <div className="galeria">
      {users.map((user, index) => (
        <Perfil key={index} name={user.name} imageUrl={user.imageUrl} />
      ))}
    </div>
  );
}

export default Galeria;
