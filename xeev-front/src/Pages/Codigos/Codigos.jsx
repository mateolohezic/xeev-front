import React from 'react';
import CargarCodigo from '../../Components/CargarCodigo/CargarCodigo';
import './codigos.css';

function Codigos() {
  return (
    <>
    <CargarCodigo />

    <div className="tituloPrincipal text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75">Tus códigos</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-12">
                <div className="table-responsive mt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Cliente</th>
                            <th>Inicio</th>
                            <th>Vencimiento</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}

export default Codigos