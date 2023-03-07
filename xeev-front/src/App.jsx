import React from 'react'
import { Route, Routes } from "react-router-dom";
import CargarCodigo from './Components/CargarCodigo/CargarCodigo';
import NavBar from './Components/Navbar/Navbar';
import './App.css';

function App() {

  return (
    <>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<CargarCodigo/>} />
    </Routes>
    </>
  );
}

export default App;