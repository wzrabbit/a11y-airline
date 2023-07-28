import React from 'react';
import './App.css';
import SpinButton from './components/SpinButton';

function App() {
  return (
    <div className="App">
      <h1>승객 선택</h1>
      <div className="List">
        <SpinButton label="성인" />
        <SpinButton label="소아" />
        <SpinButton label="유아" />
      </div>
    </div>
  );
}

export default App;
