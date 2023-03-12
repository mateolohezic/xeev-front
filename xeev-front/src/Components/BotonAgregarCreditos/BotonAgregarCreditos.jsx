import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function BotonAgregarCreditos(vendedor) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

    const Apretado = async () => {
        const { value: creditos } = await Swal.fire({
            title: '¿Cuantos créditos quieres agregar?',
            input: 'number',
            inputPlaceholder: 'Créditos'
          })
          if (creditos) {
            swalWithBootstrapButtons.fire({
                title: `¿Estas seguro que quieres agregar ${creditos} créditos?`,
                text: "¡Esto no se podrá deshacer!",
                icon: 'question',
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
                  await añadirCreditos(creditos);
                  swalLoading.close();
                  swalWithBootstrapButtons.fire(
                    '¡Créditos añadidos!',
                    'Se añadieron los créditos del vendedor con éxito.',
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
    
    const añadirCreditos = async (creditos) => {
        const creditosNuevos = parseInt(creditos) + parseInt(vendedor.vendedor.credits)
        await axios.patch(`https://automatizacion-xeev-production.up.railway.app/users/agregar-creditos`, {
            id: vendedor.vendedor._id,
            credits: creditosNuevos
        })
    }


    return (
        <>
        <button type="button" className="btn btn-outline-primary" onClick={Apretado} data-bs-toggle="tooltip" data-bs-placement="right" title="Editar créditos"><i className="bi bi-database-fill-gear"></i></button>
        </>
    )
}

export default BotonAgregarCreditos