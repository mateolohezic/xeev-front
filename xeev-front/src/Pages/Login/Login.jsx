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
        <div className='fondoPantalla'>
            <div className="formularioLogin mx-auto p-5">
                <div className="text-center mx-auto fs-1 mb-2 rounded text-light tituloIniciarSesion p-2 mb-4">Iniciar Sesión</div>
                <FormularioIniciarSesion />
            </div>
        </div>
        </>
    )
}

export default Login