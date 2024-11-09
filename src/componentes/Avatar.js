import React from 'react';
import '../Atv03.css';

function Avatar({ src, alt }) {
  return (
    <div className="avatar">
      <img src={src} alt={alt} className="avatar-img" />
    </div>
  );
}

export default Avatar;

