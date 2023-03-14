import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import Codigos from './Pages/Codigos/Codigos';
import Admin from './Pages/Admin/Admin';
import './App.css';
import Footer from './Components/Footer/Footer';
import ProblemasTecnicos from './Components/ProblemasTecnicos/ProblemasTecnicos';

function App() {

  return (
    <>
    <ProblemasTecnicos/>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Codigo" element={<Codigos/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Admin" element={<Admin/>} />
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;