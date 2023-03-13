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
                  <span className='text-light text-opacity-75'>Somos XPLAY, el servicio número uno de streaming en toda Latinoamérica. Proveedor de las mejores películas y series actuales del mercado, a la mejor calidad, y al mejor precio. Únete a nuestro equipo y conviértete en uno de los mejores agentes del mercado.</span>
                </div>
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
