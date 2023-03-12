import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotonRecrearCodigo from '../BotonRecrearCodigo/BotonRecrearCodigo';
import BotonRenovarCodigo from '../BotonRenovarCodigo/BotonRenovarCodigo';
import BotonSuspenderCodigo from '../BotonSuspenderCodigo/BotonSuspenderCodigo';
import './filaCodigosVendedor.css'


function FilaCodigosVendedor( codigo ) {

    const id = localStorage.getItem('idUsuarioLogeado');
    const [admin, setAdmin] = useState(false)
    const [activo, setActivo] = useState(false);

    useEffect(() =>{
        if (codigo.codigo.status === 'activo') {
            setActivo(true);
        }
    }, [])

    
    useEffect(() =>{
        if (id !== null) {
            axios.get(`https://automatizacion-xeev-production.up.railway.app/users/${id}`)
            .then((response) =>{
                if (response.data.role === 'admin') {
                    setAdmin(true);
                }
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    }, [id])

    return (
    <>
        <tr>
            <td>{codigo.codigo.code}</td>
            <td>{codigo.codigo.name}</td>
            <td>{codigo.codigo.number}</td>
            <td>{codigo.codigo.date}</td>
            <td>{codigo.codigo.expire}</td>
            {
                admin ? <><td>{codigo.codigo.seller}</td></> : <></>
            }
            <td>{codigo.codigo.status.toUpperCase()}</td>
            <td>
            <div className="btn-group" role="group" aria-label="Basic example">
                    {
                        <BotonRenovarCodigo codigo={codigo.codigo}/>
                    }

                    {
                        activo ? <BotonSuspenderCodigo codigo={codigo.codigo}/> : <BotonRecrearCodigo codigo={codigo.codigo}/>
                    }
            </div>
            </td>
        </tr>
    </>
  )
}

export default FilaCodigosVendedor