import React from 'react';
import './App.css';
import Header from './components/header/Header';
import DisplayArea from './components/display area/DisplayArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <DisplayArea />
    </div>
  );
}

export default App;
