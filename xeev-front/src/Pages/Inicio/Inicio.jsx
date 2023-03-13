import React from 'react'
import './inicio.css'
import 'animate.css';
import videoFile from './tutorial.mp4';
import coins from './coins.png';
import guaranteed from './guaranteed.png';
import value from './value.png';
import winner from './winner.png';
import logo from './XPLAY.png';

function Inicio() {

  // col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6

  return (
    <>
    <div className='fondoPantalla'>
      <div className='text-center fs-1 animate__animated animate__fadeInLeft'>XPlay, el mejor servicio de streaming</div>
      <div className='row w-75 mx-auto mt-5 gap-5 gap-sm-5 gap-md-0 gap-lg-0 gap-xl-0 gap-xxl-0'>
        <div className='d-flex align-items-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center'>
          <div><span className='w-100 fs-4 align-middle text-muted animate__animated animate__zoomIn'>  
            <b>XPLAY</b> es  <b>una moderna e innovadora</b> aplicación, unica en el mercado digital. Cuenta con <b>el mejor contenido actualizado</b> en tiempo real. Encontraras <b>lo mejor de las plataformas mas importantes</b> como Netflix, Amazon, HBO Max, Paramount, Disney, Apple Tv,  Hulu,  Star+,  Starz Play, Vix+, Universal, Peacock, Blim Tv, Hentai, Epix y mucho más.
          </span></div>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center animate__animated animate__backInRight'>
          <img src={logo} className='img-fluid rounded w-100'/>
        </div>
      </div>
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
      <div className='col-8 col-sm-8 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mx-auto text-center animate__animated animate__backInRight border-bottom border-1 pb-5'>
        <div className='mb-3'><span className='text-muted fs-4'><b>Tutorial</b></span></div>
        <video className='w-100 rounded' controls>
            <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className='row w-75 mx-auto mt-5'>
        <div className='d-flex flex-column justify-content-evenly col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center'>
          <div className='mb-4'><img className='col-8 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-4' src="https://cdn-icons-png.flaticon.com/512/2039/2039075.png" /></div>
          <div className=''><span className='w-100 fs-4 text-muted'>¿Quieres formar parte de nuestro <b>equipo</b>?</span></div>
        </div>
      </div>
      <div className='mb-5 text-center'><span className='text-muted fs-4 conoceNuestrosPaquetes'><b>CONOCE NUESTROS PAQUETES</b></span></div>
      <div className='row w-100 mx-auto mt-1 text-center d-flex align-items-start  gap-5 gap-sm-5 gap-md-0 gap-lg-0 gap-xl-0 gap-xxl-0'>
        <div className='d-flex flex-column justify-content-center col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center'>
          <img src={coins} className='w-50 mx-auto'/>
          <div><span className='fs-1'><b>Inicial</b></span></div>
          <div><span className='fs-4'><b>+ 10 Créditos</b></span></div>
        </div>
        <div className='d-flex flex-column justify-content-center col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center'>
          <img src={guaranteed} className='w-50 mx-auto'/>
          <div><span className='fs-1'><b>Junior</b></span></div>
          <div><span className='fs-4'><b>+ 30 Créditos</b></span></div>
        </div>
        <div className='d-flex flex-column justify-content-center col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center'>
          <img src={winner} className='w-50 mx-auto'/>
          <div><span className='fs-1'><b>Senior</b></span></div>
          <div><span className='fs-4'><b>+ 50 Créditos</b></span></div>
        </div>
        <div className='d-flex flex-column justify-content-center col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center'>
          <img src={value} className='w-50 mx-auto'/>
          <div><span className='fs-1'><b>Pro Gold</b></span></div>
          <div><span className='fs-4'><b>+ 150 Créditos</b></span></div>
          <div><span className='fs-4'><b><i className="bi bi-tag-fill"></i> Descuentos</b></span></div>
          <div><span className='fs-4'><b><i className="bi bi-person-fill-add"></i> Creación de vendedores</b></span></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inicio