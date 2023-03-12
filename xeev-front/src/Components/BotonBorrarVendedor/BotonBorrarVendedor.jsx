import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function BotonBorrarVendedor(vendedor) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

    const Apretado = async () => {

      if(vendedor.vendedor.role === 'admin') {
        Swal.fire(
          '¡No puedes borrar un administrador!',
          'Esta acción esta prohibida.',
          'error'
        )
      } else {
      swalWithBootstrapButtons.fire({
          title: `¿Estas seguro que quieres eliminar a este vendedor?`,
          text: "¡Esto no se podrá deshacer!",
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
            await borrarVendedor()
            swalLoading.close();
            swalWithBootstrapButtons.fire(
              '¡Vendedor eliminado!',
              'Se elimino el vendedor con éxito.',
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
          
          
    const borrarVendedor = async () => {
        const response = await axios.delete(`https://automatizacion-xeev-production.up.railway.app/users/eliminar-user`, {
            data:{
                id: vendedor.vendedor._id
            }   
        })
        console.log(response);
    }


    return (
        <>
            <button type="button" className="btn btn-outline-danger" onClick={Apretado} data-bs-toggle="tooltip" data-bs-placement="right" title="Eliminar vendedor"><i className="bi bi-trash-fill"></i></button>
        </>
    )
}

export default BotonBorrarVendedor