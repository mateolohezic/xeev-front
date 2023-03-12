import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function BotonSuspenderCodigo(codigo) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const Apretado = () => {
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres desactivar este código?',
      text: "No recuperarás tu crédito.",
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
        await Suspender();
        swalLoading.close();
        swalWithBootstrapButtons.fire(
          'Código desactivado!',
          'El código de su cliente se ha desactivado con éxito.',
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

    const Suspender = async () => {
        await axios.patch(`https://automatizacion-xeev-production.up.railway.app/codigo/desactivar-codigo`, {
            id: codigo.codigo._id,
        })
        await axios.post(`https://automatizacion-xeev-production.up.railway.app/codigo/borrar-xeev`, {
            idXeev: codigo.codigo.idXeev,
        })
    }

  return (
    <>
    <button type="button" className="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="right" title="Suspender código" onClick={Apretado}><i className="bi bi-x-octagon-fill"></i></button>
    </>
  )
}

export default BotonSuspenderCodigo