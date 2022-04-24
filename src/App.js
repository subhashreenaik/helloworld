import logo from './logo.png';
import './App.css';
import React from 'react';

function App() {
  const url="https://www.bridgelabz.com/";
var message="Hello from BridgeLabz";

//Event Binding technique
function onClicked(Event){
  
  console.log("button is clicked",Event);
  window.open(url,"open")
}

  return (
    //Demonstrating  property binding
    <div className="App">
      <h1>{message}</h1> 
      <img src={logo} alt='bridgeLabz logo' onClick={onClicked(Event)}/>

    </div>
  );
}

export default App;
