import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'

function CargarPrueba() {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const Submit = async (data) => {
    const codigoExists = await codigoActivos.find(prueba => prueba.code === data.codigo.toUpperCase());
    if (codigoExists) {
      Swal.fire(
        '¡Código ya activo!',
        'Este código no puede tener una prueba.',
        'error'
      )
    } else {
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres activar esta prueba?',
      text: "Se permite solo una prueba por código.",
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
        await onSubmit(data)
        swalLoading.close();
        swalWithBootstrapButtons.fire(
          '¡Prueba activada con exito!',
          'La prueba de su cliente se ha cargado y activado con éxito.',
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
    })}
  }

  const { register, handleSubmit, formState: { errors }} = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [user, setUser] = useState({})

  const id = localStorage.getItem('idUsuarioLogeado');
  const [codigo, setCodigo] = useState([])
  const [codigoActivos, setCodigoActivos] = useState([])

  useEffect(() =>{
    if (id !== null) {
        axios.get(`https://automatizacion-xeev-production.up.railway.app/prueba/get-prueba`)
        .then((response) =>{
            setCodigo(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
        axios.get(`https://automatizacion-xeev-production.up.railway.app/codigo/get-codigo`)
        .then((response) =>{
          setCodigoActivos(response.data);
        })
        .catch((error) =>{
            console.error(error);
        })
    }
}, [id])

  if (id === null) {
    window.location.replace('/')
  }

  useEffect(() =>{
      if (id !== null) {
          axios.get(`https://automatizacion-xeev-production.up.railway.app/users/${id}`)
          .then((response) =>{
              setUser(response.data);
          })
          .catch((error) =>{
              console.error(error);
          })
      }
  }, [id])

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post('https://automatizacion-xeev-production.up.railway.app/prueba/cargar-prueba', {
        codigo: data.codigo.toUpperCase(),
        name: data.name.trim(),
        number: data.number,
        seller: user.username
      });

    } catch (error) {
      setStatusMessage('Ocurrió un error, espere un momento y vuelva a intentar.');
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(Submit)} className="p-4 rounded bg-white">
      <div><span className='fs-3'>Cargar una nueva prueba</span></div>
      <div className='mb-4'><span className='text-muted fs-6'>La prueba gratis dura un día.</span></div>
        <div className="form-group">
          <input id="name" type="text" placeholder='Nombre del cliente' className={`mt-3 form-control form-control-lg ${errors.name && 'is-invalid'}`}
            {...register('name', { required: true, pattern: /^[\s]*[a-zA-ZáéíóúñÁÉÍÓÚÑ]+(?:[ ][a-zA-ZáéíóúñÁÉÍÓÚÑ]+)*[\s]*$/ })}
          />
          {errors.name?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.name?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="number" type="text" placeholder='Número de contacto' className={`mt-3 form-control form-control-lg ${errors.number && 'is-invalid'}`}
            {...register('number', { required: true, pattern: /^[0-9+-]*([ ][0-9+-]*){0,1}[0-9+-]*$/ })}
          />
          {errors.number?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.number?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="codigo" type="text" placeholder='Código' className={`mt-3 form-control form-control-lg ${errors.codigo && 'is-invalid'}`}
            {...register('codigo', { 
              required: true,
              pattern: /^[\w]{8}$/g,
              validate: (value) =>
              !codigo.some((obj) => obj.code.toUpperCase() === value.toUpperCase()) ||
              "¡Este código ya uso su prueba!",
             })}
          />
          {errors.codigo?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.codigo?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
          {errors.codigo?.type === "validate" && (
            <span className="invalid-feedback d-block">{errors.codigo.message}</span>
          )}
        </div>
        <div className='d-flex flex-row-reverse mb-4 mt-4'>
        <button type="submit" className={`btn btn-${submitting ? 'success' : 'info' } mt-3`} disabled={ user.role === undefined ? true : false }>
          {submitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <>
              <i className="bi bi-hourglass-split"></i> Prueba
            </>
          )}
        </button>
        </div>
        {statusMessage && (
          <div className={`alert ${statusMessage.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default CargarPrueba;