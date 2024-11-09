import React from 'react';
import './DoubleValue.css';

function DoubleValue({ value }) {
  return (
    <p className="double-value">
      O dobro de {value} é {value * 2}.
    </p>
  );
}

export default DoubleValue;
