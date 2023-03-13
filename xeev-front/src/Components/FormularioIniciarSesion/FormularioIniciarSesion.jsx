import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './formularioIniciarSesion.css'

function FormularioIniciarSesion() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false)
    const [cargando, setCargando] = useState(false)
    
    const onSubmit = async(datos) => {
        setCargando(true)
        const respuesta = await axios.post(`https://automatizacion-xeev-production.up.railway.app/users/login-user`, {
            email: datos.email.toLowerCase(),
            password: datos.password
        })
        console.log(respuesta);
        if (respuesta.status === 200) {        
            const userEncontrado = respuesta
            localStorage.setItem('idUsuarioLogeado', respuesta.data.user._id);
            if (respuesta.data.user.role === "admin") {
                localStorage.setItem('token', respuesta.data.token);
            }
            window.location.replace("/")
          } 
          
        if (respuesta.status === 206){
            setCargando(false)
            setError(true);
          }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <input id="email" type="text" placeholder='Correo electrónico' className={`mt-3 form-control form-control-lg ${errors.email && 'is-invalid'}`}
                        {...register('email', { required: true, pattern: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i })}
                    />
                    {errors.email?.type === 'required' && (
                        <span className="invalid-feedback d-block">Correo electrónico requerido</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <span className="invalid-feedback d-block">Correo electrónico inválido</span>
                    )}
                </div>
                </div>
                <div className="row">
                <div className="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <input id="password" type="password" placeholder='Contraseña' className={`mt-3 form-control form-control-lg ${errors.password && 'is-invalid'}`}
                        {...register('password', {required: true, pattern: /^\S+$/ })}
                    />
                    {errors.password?.type === 'required' && (
                        <span className="invalid-feedback d-block">Contraseña requerida</span>
                    )}
                    {errors.password?.type === 'pattern' && (
                        <span className="invalid-feedback d-block">Contraseña inválida</span>
                    )}
                </div>
                </div>
                {
                    error ? <><p className='text-danger mt-2 ms-1 fs-6'>Datos incorrectos.</p></> : <></>
                }
                <div className="d-flex flex-row-reverse mt-3">
                    <button type="submit" className="btn botonInicioSesion">
                    {cargando ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                        'Iniciar sesión'
                    )}
                    </button>
                </div>
            </form>
        </>
  )
}

export default FormularioIniciarSesion