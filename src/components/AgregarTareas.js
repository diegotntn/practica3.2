import React, { useState } from 'react';
import '../App.css';

function AgregarTareas({ onAgregarTarea }) {
    const [texto, setTexto] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!texto) return;  // No agregar tareas vacías
        onAgregarTarea(texto);
        setTexto('');  // Limpiar input después de agregar
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="Agregar nueva tarea"
            />
            <button className="agregarBoton">Agregar</button>
        </form>
    );
}

export default AgregarTareas;
