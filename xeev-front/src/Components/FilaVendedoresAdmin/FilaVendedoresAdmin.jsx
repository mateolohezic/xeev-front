import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import './filaVendedoresAdmin.css'
import BotonAgregarCreditos from '../BotonAgregarCreditos/BotonAgregarCreditos';
import BotonBorrarVendedor from '../BotonBorrarVendedor/BotonBorrarVendedor';

  function FilaVendedoresAdmin(vendedor) {

  const [codigo, setCodigo] = useState([])

  useEffect(() =>{
        axios.get(`https://automatizacion-xeev-production.up.railway.app/codigo/get-codigo`)
        .then((response) =>{
            setCodigo(response.data.filter((codigo) => codigo.seller === vendedor.vendedor.username))
        })
        .catch((error) =>{
            console.error(error);
        })
}, [])

  return (
    <>
      <tr>
        <td>{vendedor.vendedor.username}</td>
        <td>{vendedor.vendedor.name}</td>
        <td>{vendedor.vendedor.surname}</td>
        <td>{vendedor.vendedor.email}</td>
        <td>{vendedor.vendedor.credits}</td>
        <td>{vendedor.vendedor.expire}</td>
        <td>{codigo.length}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <BotonAgregarCreditos vendedor={vendedor.vendedor}/>
            <BotonBorrarVendedor vendedor={vendedor.vendedor}/>
          </div>
        </td>
      </tr>
    </>
  )
}

export default FilaVendedoresAdmin