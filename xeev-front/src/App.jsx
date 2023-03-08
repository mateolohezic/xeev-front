import React from 'react'
import { Route, Routes } from "react-router-dom";
import CargarCodigo from './Components/CargarCodigo/CargarCodigo';
import NavBar from './Components/Navbar/Navbar';
import './App.css';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Codigo" element={<CargarCodigo/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;