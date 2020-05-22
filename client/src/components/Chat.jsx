import React, { useState, useEffect } from 'react';
 
export default ({socket}) => {
    const [message, setMessage] = useState()
  useEffect(() => {
    console.log('Is this running?');
    socket.on("Welcome to the server!", data => {
        console.log(data);
        console.log("You what mate?!")
    })
    socket.on('Pinged', data =>{
        console.log(data);
    })
    return () => socket.disconnect(true);
  }, []);

  const pingOtherPlaces = () =>{
      socket.emit("Pinging Peeps", message)
  }
 
  return (
    <div className="App">
      <button onClick={pingOtherPlaces}>Ping someone!</button>
      <input type="text" onChange={(e) => {setMessage(e.target.value) }}/>
    </div>
  );
}