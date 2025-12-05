import React from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Librería</h3>
        <h1>Relatos de Papel</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
