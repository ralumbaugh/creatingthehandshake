import React from 'react';
import Chat from './components/Chat';
import './App.css';
import io from "socket.io-client";

const socket = io(":8000")

function App() {
  return (
    <div className="App">
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
