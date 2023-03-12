import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CargarCodigo from '../../Components/CargarCodigo/CargarCodigo';
import FilaCodigosVendedor from '../../Components/FilaCodigosVendedor/FilaCodigosVendedor';
import './codigos.css';

function Codigos() {

    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [codigo, setCodigo] = useState([])
    const [codigoPrint, setCodigoPrint] = useState([])
    const [codigosSinFiltrar, setCodigosSinFiltrar] = useState([])
    const id = localStorage.getItem('idUsuarioLogeado');

    if (id === null) {
      window.location.replace('/')
    }
  
    useEffect(() =>{
        if (id !== null) {
            axios.get(`https://automatizacion-xeev-production.up.railway.app/users/${id}`)
            .then((response) =>{
                setUser(response.data);
                if (response.data.role === 'admin') {
                    setAdmin(true);
                }
            })
            .catch((error) =>{
                console.error(error);
            })
            axios.get(`https://automatizacion-xeev-production.up.railway.app/codigo/get-codigo`)
            .then((response) =>{
                setCodigosSinFiltrar(response.data)
                setCodigoPrint(response.data)
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [id])

    useEffect(() =>{
        if (admin === false){
            const codigosFiltradoss = codigosSinFiltrar.filter((codigo) => codigo.seller === user.username);
            setCodigo(codigosFiltradoss);
            setCodigoPrint(codigosFiltradoss);
        } else {
            setCodigo(codigosSinFiltrar);
            setCodigoPrint(codigosSinFiltrar);
        }
    }, [codigosSinFiltrar])

    const searchCoinciden = (busqueda) => {
        const resultados = codigo.filter(codigo => codigo.code.includes(`${busqueda.toUpperCase()}`) || codigo.name.includes(`${busqueda}`) || codigo.name.toLowerCase().includes(`${busqueda.toLowerCase()}`) || codigo.name.toUpperCase().includes(`${busqueda.toUpperCase()}`) || codigo.seller.toUpperCase().includes(`${busqueda.toUpperCase()}`) || codigo.seller.includes(`${busqueda}`) || codigo.date.includes(`${busqueda}`) || codigo.expire.includes(`${busqueda}`) || codigo.status.toUpperCase().includes(`${busqueda.toUpperCase()}`))
        setCodigoPrint(resultados)
    }

  return (
    <>
    <div className='fondoPantalla'>
    <CargarCodigo />
    <div className="text-center mx-auto fs-1 tituloCodigos text-light rounded p-3 w-50">
        { admin ? <>Códigos</> : <>Tus códigos</> }
    </div>
    <div className="container-fluid row text-center justify-content-center mt-5 mb-5 m-0 p-0">
        <div className="col-11 col-sm-11 col-md-10 col-lg-7 col-xl-7 col-xxl-7">
            <div className="input-group mb-3">
            <input type="text" className="form-control barraBusqueda" onInput={(event) => searchCoinciden(event.target.value)} placeholder="Buscar un cliente..." aria-label="Search" aria-describedby="search-button"/>
            </div>
        </div>
        <div className="col-12">
            <div className="table-responsive mt-3">
                <table className="table table-hover tableDark align-middle">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Cliente</th>
                        <th>Teléfono</th>
                        <th>Inicio</th>
                        <th>Vencimiento</th>
                        {
                            admin ? <><th>Vendedor</th></> : <></>
                        }
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        codigoPrint.sort((a,b) => (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)).map(cadaCodigo => <FilaCodigosVendedor key={cadaCodigo._id} codigo={cadaCodigo}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Codigos