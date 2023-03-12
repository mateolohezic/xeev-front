import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

function BotonRecrearCodigo(codigo) {

  const id = localStorage.getItem('idUsuarioLogeado');
  const [vendedor, setUser] = useState({})

  useEffect(() =>{
        axios.get(`https://automatizacion-xeev-production.up.railway.app/users/${id}`)
        .then((response) =>{
            setUser(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
}, [id])

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const Apretado = () => {

    if (vendedor.credits === 0 && vendedor.role === 'usuario'){
      Swal.fire(
        '¡Sin créditos!',
        'No tienes los créditos necesarios para hacer esto.',
        'error'
      )
    } else{
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres reactivar este código?',
      text: "Esta acción consumirá un crédito.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then( async (result) => {
      if (result.isConfirmed) {
        const swalLoading = Swal.fire({
          title: 'Procesando...',
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
        await Recrear()
        swalLoading.close();
        swalWithBootstrapButtons.fire(
          'Código reactivado!',
          'El código de su cliente se ha reactivado con éxito.',
          'success'
        ).then(() => {
          window.location.reload(true);
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '¡Estuvo cerca!',
          'error'
        )
      }
    })
    }
  }

    const Recrear = async () => {
      const creditosNuevos = parseInt(vendedor.credits) - 1
      if (vendedor.role === 'usuario'){
      await axios.patch(`https://automatizacion-xeev-production.up.railway.app/users/restar-credito`, {
          id: vendedor._id,
          credits: creditosNuevos
      })}
      await axios.patch(`https://automatizacion-xeev-production.up.railway.app/codigo/recrear-codigo`, {
          id: codigo.codigo._id,
      })
      await axios.post('https://automatizacion-xeev-production.up.railway.app/codigo/recrear-codigo-xeev', {
          codigo: codigo.codigo.code,
      });
    }

  return (
    <>
    <button type="button" className="btn btn-outline-success" data-bs-toggle="tooltip" disabled={ vendedor.role === undefined ? true : false } data-bs-placement="right" title="Reactivar suscripción" onClick={Apretado}><i className="bi bi-plus-circle-dotted"></i></button>
    </>
  )
}

export default BotonRecrearCodigo