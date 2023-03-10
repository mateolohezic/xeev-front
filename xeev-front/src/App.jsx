import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import Codigos from './Pages/Codigos/Codigos';
import './App.css';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Codigo" element={<Codigos/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;