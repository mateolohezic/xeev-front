import React, { useState, useEffect } from 'react';
import FilaCodigosVendedor from '../FilaCodigosVendedor/FilaCodigosVendedor'
import axios from 'axios';

function ImprimirFilaCodigoVendedor(codigo) {

    const [user, setUser] = useState({})
    const id = localStorage.getItem('idUsuarioLogeado');

    useEffect(() =>{
        const usar = async () =>{
            await axios.get(`https://automatizacion-xeev-production.up.railway.app/users/${id}`)
            .then(async (response) =>{
                await setUser(response.data);
            })
            .catch((error) =>{
                console.error(error);
            })
            }
            usar()
        }, [id])


    const imprimir = codigo.codigo

  return (
    <>
    { user.role === 'admin' ? imprimir.sort((a,b) => (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)).map(cadaCodigo => <FilaCodigosVendedor key={cadaCodigo._id} codigo={cadaCodigo}/>) : imprimir.filter((codigo) => codigo.seller === user.username).sort((a,b) => (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)).map(cadaCodigo => <FilaCodigosVendedor key={cadaCodigo._id} codigo={cadaCodigo}/>)}
    </>
  )
}

export default ImprimirFilaCodigoVendedor