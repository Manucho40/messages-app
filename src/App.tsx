import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayMessage from './component/DisplayMessage';
import ModalWindow from './component/ModalWindow';
import { Message } from './types';
// import axios from "axios" 
function App() {
  const [message, setMessage] = useState<Message[] | null>(null);

  // useEffect(() => {
  //   const response  = axios.get("https://strapitest.ka-el.fr/api/messages").then(
  //     (res) => setMessage([...res.data])
  //   );
  // }, [])
  return (
    <div className="h-screen overflow-hidden bg-[url('./assets/sea.jpg')] opacity-50">
        <ModalWindow />
        <DisplayMessage />
    </div>
  );
}

export default App;
