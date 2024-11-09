import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from './componentes/Perfil';
import Galeria from './componentes/Galeria';
import StatusMessage from './componentes/StatusMessage';
import Lista from './componentes/Lista';
import DoubleValue from './componentes/DoubleValue';
import './App.css';

function Atv03() {
  return (
    <div className="container">
      <h2>Atividade 03</h2>
      <Perfil name="Alice" imageUrl="https://via.placeholder.com/100" />
      <Galeria />
      <StatusMessage isOnline={true} />
      <Lista items={['Item 1', 'Item 2', 'Item 3']} />
      <DoubleValue value={5} />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv03;
