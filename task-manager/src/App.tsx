import React from 'react';
import logo from './logo.svg';
import './App.css';
import appIcon from "./assets/app_icon.svg";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App h-screen">
    <div className="grid grid-cols-4 h-full">
 <Sidebar/>
  <div className="bg-light-accent  col-span-3 flex flex-col	justify-start items-start "> 
  <div className="bg-white h-24 w-full border-b border-solid border-b-light-grey"></div>
  <div className="flex flex-row justify-between w-full p-6 align-middle">
  <h1 className="text-4xl text-blue bg-purple-200 ">
     🔥 Task
  </h1>
    <div className="flex-space-x-1 overflow-hidden">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <span className="text-grey font-normal text-lg mx-4">+6</span>
  
        <button className="w-8 h-8 rounded-full pb-1
                       bg-light-grey hover:bg-accent-color text-accent-color hover:text-light-grey duration-300	 transition-all font-bold hover:cursor-pointer">
            <span >+</span>
        </button>
</div>
  </div>

    </div>
  </div>
    </div>
  );
}

export default App;
