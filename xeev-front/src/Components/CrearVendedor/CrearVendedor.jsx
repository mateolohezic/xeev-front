import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'


function CrearVendedor() {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const Submit = (data) => {
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres agregar un vendedor?',
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
        await onSubmit(data)
        swalLoading.close();
        swalWithBootstrapButtons.fire(
          '¡Vendedor creado con éxito!',
          'Su nuevo vendedor se ha creado y activado con éxito.',
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

  const { register, handleSubmit, formState: { errors }} = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axios.post(`https://automatizacion-xeev-production.up.railway.app/users/crear-user`, {
          username: data.username.trim(),
          name: data.name.trim(),
          surname: data.surname.trim(),
          email: data.email.trim(),
          password: data.password.trim(),
          role: data.role.toLowerCase().trim()
      })
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit(Submit)} className="p-4 bg-white rounded">
      <div className='mb-3'><span className='fs-3'>Añadir un vendedor</span></div>
        <div className="form-group">
          <input id="name" type="text" placeholder='Nombre' className={`mt-3 form-control form-control-lg ${errors.name && 'is-invalid'}`}
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
          <input id="surname" type="text" placeholder='Apellido' className={`mt-3 form-control form-control-lg ${errors.surname && 'is-invalid'}`}
            {...register('surname', { required: true, pattern: /^[\s]*[a-zA-ZáéíóúñÁÉÍÓÚÑ]+(?:[ ][a-zA-ZáéíóúñÁÉÍÓÚÑ]+)*[\s]*$/ })}
          />
          {errors.surname?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.surname?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="email" type="text" placeholder='Correo electrónico' className={`mt-3 form-control form-control-lg ${errors.email && 'is-invalid'}`}
            {...register('email', { required: true, pattern: /^\s*\w+[\w-.]@\w+((-\w+)|(\w)).[a-z]{2,}\s*$/i })}
          />
          {errors.email?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="username" type="text" placeholder='Usuario' className={`mt-3 form-control form-control-lg ${errors.username && 'is-invalid'}`}
            {...register('username', { 
              required: true,
              pattern: /^\s*\S+\s*$/,
             })}
          />
          {errors.username?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.username?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="password" type="text" placeholder='Contraseña' className={`mt-3 form-control form-control-lg ${errors.password && 'is-invalid'}`}
            {...register('password', { 
              required: true,
              pattern: /^\S+$/,
             })}
          />
          {errors.password?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.password?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className="form-group">
          <input id="role" type="text" placeholder='Permisos' className={`mt-3 form-control form-control-lg ${errors.role && 'is-invalid'}`}
            {...register('role', { 
              required: true,
              pattern: /^(admin|usuario|oficial|Usuario|Admin|Oficial|USUARIO|ADMIN|OFICIAL)$/,
             })}
          />
          <div className='mt-2 ms-2'><span className='text-muted'>Opciones: admin, usuario, oficial</span></div>
          {errors.role?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.role?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className='d-flex flex-row-reverse mb-4 mt-4'>
        <button type="submit" className={`btn btn-${submitting ? 'primary' : 'success' } mt-3`} disabled={submitting}>
          {submitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <>
              <i className="bi bi-person-fill-add"></i> Añadir
            </>
          )}
        </button>
        </div>
      </form>
    </div>
  );
}

export default CrearVendedor;