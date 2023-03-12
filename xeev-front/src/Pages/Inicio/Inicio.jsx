import React from 'react'
import './inicio.css'
import 'animate.css';

function Inicio() {

  // col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6

  return (
    <>
    <div className='fondoPantalla'>
      <div className='text-center fs-1 animate__animated animate__fadeInLeft'>XPlay, el mejor servicio de streaming</div>
      <div className='row w-75 mx-auto mt-5 pb-5 gap-5 gap-sm-5 gap-md-0 gap-lg-0 gap-xl-0 gap-xxl-0'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center animate__animated animate__backInUp'>
          <img src="https://www.nme.com/wp-content/uploads/2021/11/People-watching-TV.jpg" className='img-fluid rounded w-100'/>
        </div>
        <div className='d-flex align-items-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center'>
          <div><span className='w-100 fs-4 align-middle text-muted animate__animated animate__zoomIn'>Disfruta desde <b>cualquier</b> dispositivo, lo único que nos importa es tu <b>experiencia</b> y tu <b>comodidad</b></span></div>
        </div>
      </div>
      <div className='row w-75 mx-auto mt-5 pb-5 gap-5 gap-sm-5 gap-md-0 gap-lg-0 gap-xl-0 gap-xxl-0'>
        <div className='d-flex flex-column justify-content-evenly col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center'>
          <div className='mb-4'><span className='w-100 fs-4 text-muted animate__animated animate__zoomIn'>Descarga nuestra aplicación<br></br><b>rápida, simple, y sencilla</b></span></div>
          <div className='mb-4'><img className='w-25' src="https://static.vecteezy.com/system/resources/previews/011/911/412/original/smartphone-icon-with-transparent-background-free-png.png" /></div>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center animate__animated animate__backInRight'>
          <div><img className='w-100 img-fluid rounded' src="https://lh3.googleusercontent.com/8u7WqKb548hD9w-piYWpNRLyaP-7ETQDfmBu2z7A-RONj5-y7JTUEQdrKY8L-yC4pQ=h300" /></div>
        </div>
      </div>
      <div className='row w-75 mx-auto mt-5'>
        <div className='d-flex flex-column justify-content-evenly col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center'>
          <div className='mb-4'><img className='w-25' src="https://cdn-icons-png.flaticon.com/512/2039/2039075.png" /></div>
          <div className=''><span className='w-100 fs-4 text-muted'>¿Quieres formar parte de nuestro <b>equipo</b>?</span></div>
          <div className=''><a href="https://wa.link/6n9ql1" target="_blank" className='w-100 fs-4 text-muted contactanosAhora text-decoration-none'><b>¡Contáctanos ahora!</b></a></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inicio