import React from 'react';
import './App.css';
import ButtonModal from './component/ButtonModal';
import DisplayMessage from './component/DisplayMessage';

function App() {
  return (
    <div className="h-screen overflow-hidden">
        <ButtonModal />
        <DisplayMessage />
    </div>
  );
}

export default App;
