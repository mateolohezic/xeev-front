import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './navbar.css';

function NavBar() {
  
  const [users, setUsers] = useState("")
  const id = localStorage.getItem('idUsuarioLogeado');

  useEffect(() =>{
    if (id !== null){
        axios.get(`http://localhost:8000/users/${id}`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }
}, [users])

  return (
    <nav className="navbar navbar-expand-lg navBar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://play-lh.googleusercontent.com/WK3OLpakSyxboiQRmvUbMHuZYFFk2S2hFjfDI-ChHAMAGyc8CPtoqLR-9gJD8YBpZLw" alt="logo" width="50" height="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navbarIconoBoton">
              <a className="nav-link text-decoration-none text-light" aria-current="page" href="/"><i className="bi bi-house-door-fill"></i> Inicio</a>
            </li>
          </ul>
          {
            id ?
            <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navbarIconoBoton">
                <a className="nav-link text-decoration-none text-light" aria-current="page" href="/Login"><i className="bi bi-person-circle"></i> Perfil</a>
              </li>
            </ul>
            </>
            : <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navbarIconoBoton">
                <a className="nav-link text-decoration-none text-light" aria-current="page" href="/Login"><i className="bi bi-person-circle"></i> Iniciar Sesión</a>
              </li>
            </ul>
            </>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;