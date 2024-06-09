import React, { useState } from 'react';
import TareaIndividual from './TareaIndividual';
import AgregarTareas from './AgregarTareas';
import EliminarTareas from './EliminarTareas';
import EliminarTodas from './EliminarTodas';
import '../App.css';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = texto => {
        const nuevaTarea = {
            id: Date.now(),
            texto: texto
        };
        setTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
    };

    const eliminarTarea = id => {
        setTareas(tareasAnteriores => tareasAnteriores.filter(tarea => tarea.id !== id));
    };

    const eliminarTodas = () => {
        setTareas([]);
    };

    return (
        <div>
            <AgregarTareas onAgregarTarea={agregarTarea} />
            {tareas.map(tarea => (
                <div key={tarea.id} className="tarea-container">
                    <TareaIndividual tarea={tarea} />
                    <EliminarTareas id={tarea.id} onEliminarTarea={eliminarTarea} />
                </div>
            ))}
            <EliminarTodas onEliminarTodas={eliminarTodas} />
        </div>
    );
}

export default ListaTareas;
