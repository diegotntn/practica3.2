import React from 'react';

function EliminarTodas({ onEliminarTodas }) {
  return (
    <button onClick={onEliminarTodas} className="eliminar-todas-btn">
      Eliminar Todas las Tareas
    </button>
  );
}

export default EliminarTodas;
