import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilaVendedoresAdmin from '../../Components/FilaVendedoresAdmin/FilaVendedoresAdmin';
import CrearVendedor from '../../Components/CrearVendedor/CrearVendedor';
import './admin.css'

function Admin() {

    const [vendedores, setVendedores] = useState([])
    const [vendedoresPrint, setVendedoresPrint] = useState([])
    const tokenAdmin = localStorage.getItem('token')
    if (tokenAdmin === null) {
        window.location.replace('/')
    }

    useEffect(() =>{
        if (tokenAdmin !== null) {
        axios.get(`https://automatizacion-xeev-production.up.railway.app/users/obtener-users`)
            .then((response) =>{
                setVendedores(response.data);
                setVendedoresPrint(response.data)
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [])

    const searchCoinciden = (busqueda) => {
        const resultados = vendedores.filter(vendedor => vendedor.username.toUpperCase().includes(`${busqueda.toUpperCase()}`) || vendedor.surname.toUpperCase().includes(`${busqueda.toUpperCase()}`) || vendedor.email.toLowerCase().includes(`${busqueda.toLowerCase()}`) || vendedor.expire.includes(`${busqueda}`))
        setVendedoresPrint(resultados)
    }

    return (
        <>
        <div className='fondoPantalla'>
        <div className="text-center mx-auto fs-1 tituloCodigosAdmin text-light rounded p-3 w-50">Vendedores</div>
        <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
            <div className="col-11 col-sm-11 col-md-10 col-lg-7 col-xl-7 col-xxl-7">
                <div className="input-group mb-3">
                <input type="text" className="form-control barraBusqueda" onInput={(event) => searchCoinciden(event.target.value)} placeholder="Buscar un vendedor..." aria-label="Search" aria-describedby="search-button"/>
                </div>
            </div>
            <div className="col-12">
                <div className="table-responsive mt-3">
                    <table className="table table-hover tableDark align-middle">
                        <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Créditos</th>
                            <th>Vencimiento</th>
                            <th>Clientes</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        vendedoresPrint.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map(cadaVendedor => <FilaVendedoresAdmin key={cadaVendedor._id} vendedor={cadaVendedor}/>)
                        } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <CrearVendedor/>
        </div>
        </>
    )
}

export default Admin