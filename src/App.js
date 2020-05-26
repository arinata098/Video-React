import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import CreateAppoinntment from './components/apointment/Create';
import AppoinntmentList from './components/apointment/List';
import TodayAppoinntment from './components/apointment/Today';


function App() {
  return (
    <div>
      <SideBar />
      <CreateAppoinntment />
      <AppoinntmentList />
      <TodayAppoinntment />

    </div>
  );
}

export default App;
