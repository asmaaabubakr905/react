import React from 'react';

function Button({ label, onClick, variant, size }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {label}
    </button>
  );
}

export default Button;