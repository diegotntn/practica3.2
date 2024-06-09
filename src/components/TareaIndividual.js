import React from 'react';
import '../App.css';

function TareaIndividual({ tarea, onEliminarTarea }) {
    return (
        <div>
            {tarea.texto}
        </div>
    );
}

export default TareaIndividual;
