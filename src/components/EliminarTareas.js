import React from 'react';
import '../App.css';

function EliminarTareas({ id, onEliminarTarea }) {
  return (
    <button onClick={() => onEliminarTarea(id)} className="eliminar-btn">
      Eliminar
    </button>
  );
}

export default EliminarTareas;

