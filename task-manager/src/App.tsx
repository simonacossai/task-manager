import React from 'react';
import logo from './logo.svg';
import './App.css';
import appIcon from "./assets/app_icon.svg";

function App() {
  return (
    <div className="App">
     <h1 className="text-6xl text-blue bg-purple-200">
     🔥 Task
    </h1>
    <img className="chat-notification-logo" src={appIcon} alt="ChitChat Logo"/>
   

    </div>
  );
}

export default App;
