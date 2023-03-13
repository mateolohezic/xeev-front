import React from 'react'
import './footer.css';
import logo from './XPLAY.png'

const Footer = () => {
  return (
    <>
        <footer className="pie-pagina footerShadow">
          <div className="grupo-1">
            <div className="box">
              <figure>
                <a href="/" className="logo">
                  <img src={logo} alt="Logo zona play" />
                </a>
              </figure>
            </div>
            <div className="box-1">
              <h2>SOBRE NOSOTROS</h2>
              <div className='row'>
                <div className='col-12'>
                  <span className='text-light text-opacity-75'>Somos XPLAY, el servicio número uno de streaming en toda Latinoamérica. Proveedor de las mejores películas y series del mercado, a la mejor calidad, y al mejor precio. Únete a nuestro equipo y conviértete en uno de los mejores agentes del mercado.</span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <div className="box">
                <h2>CONTACTO</h2>
                <div className='d-flex justify-content-start'>
                  <div className="redes align-middle">
                    <a href="https://api.whatsapp.com/send?phone=543816227964&text=Hola!%20Tengo%20una%20consulta%20%F0%9F%98%85" target="_blank"><i className="bi bi-whatsapp"></i></a>
                  </div>
                  <div className="informacionContacto align-middle border-start border-1 ps-2">
                    <div>Argentina, Tucumán</div>
                    <div>xplay@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="box">

              </div>
            </div>
          </div>
          <div className="grupo-2">
            <span className='text-muted'><small>&copy; 2023 <b>XPLAY</b> - Todos los derechos reservados - Powered by <b>Coilin</b></small></span>
          </div>
        </footer>
    </>
  )
}

export default Footer
