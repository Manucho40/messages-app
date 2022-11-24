import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayMessage from './component/DisplayMessage';
import ModalWindow from './component/ModalWindow';
import { Message } from './types';


const access_token = "563492ad6f917000010000018e17f3bd68044a4ab8a5a80e6319ebb5"
function App() {

useEffect(() => {
  axios.get('https://api.pexels.com/v1/search?query=city', {
    headers: {
      'Authorization': access_token
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })

})
  return (
    <div className="h-screen overflow-hidden">
        <ModalWindow />
        <DisplayMessage  />
    </div>
  );
}

export default App;
