import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'


function BotonRenovarCodigo(codigo) {

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

    if (vendedor.credits === 0 && vendedor.role === 'usuario') {
      Swal.fire(
        '¡Sin créditos!',
        'No tienes los créditos necesarios para hacer esto.',
        'error'
      )
    } else if(codigo.codigo.status === 'desactivado'){
      Swal.fire(
        '¡Código desactivado!',
        'Para renovar la suscripción, primero debes activarlo.',
        'error'
      )
    } else {
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres renovar la suscripción?',
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
        await Renovar()
        swalLoading.close();
        swalWithBootstrapButtons.fire(
          '¡Suscripción renovada!',
          'La suscripción de su cliente ha sido renovada con éxito.',
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

    const Renovar = async () => {
      const creditosNuevos = parseInt(vendedor.credits) - 1
      if (vendedor.role === 'usuario'){
        await axios.patch(`https://automatizacion-xeev-production.up.railway.app/users/restar-credito`, {
            id: vendedor._id,
            credits: creditosNuevos
        })
      }
      await axios.patch(`https://automatizacion-xeev-production.up.railway.app/codigo/renovar-codigo`, {
          id: codigo.codigo._id,
      })
    }

  return (
    <>
    <button type="button" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Renovar suscripción" disabled={ vendedor.role === undefined ? true : false } onClick={Apretado}><i className="bi bi-arrow-repeat"></i></button>
    </>
  )
}

export default BotonRenovarCodigo