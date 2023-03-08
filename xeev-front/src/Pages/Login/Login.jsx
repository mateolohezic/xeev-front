import React from 'react'
import FormularioIniciarSesion from '../../Components/FormularioIniciarSesion/FormularioIniciarSesion';
import './login.css';

function Login() {

    const logeado = localStorage.getItem('idUsuarioLogeado')

    if (logeado) {
        window.location.replace('/')
    }

    return (
        <> 
            <div className="formularioLogin mx-auto p-5">
                <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-5">Iniciar Sesión</div>
                <FormularioIniciarSesion />
            </div>
        </>
    )
}

export default Login