import React from 'react';
import ListaTareas from './components/ListaTareas';
import './App.css';

function Header() {
  return (
    <header className="app-header">
      <h1>Lista de Tareas</h1>
    </header>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
