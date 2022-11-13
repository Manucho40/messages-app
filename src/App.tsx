import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayMessage from './component/DisplayMessage';
import ModalWindow from './component/ModalWindow';
import { Message } from './types';


function App() {



  return (
    <div className="h-screen overflow-hidden">
        <ModalWindow />
        <DisplayMessage  />
    </div>
  );
}

export default App;
