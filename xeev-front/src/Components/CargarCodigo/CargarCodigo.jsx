import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import './cargarCodigo.css';

function CargarCodigo() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const onClickk = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.get('https://automatizacion-xeev-production.up.railway.app/users/obtener-users');
      setStatusMessage('Proceso finalizado');
      console.log(response.data);
    } catch (error) {
      setStatusMessage('Ocurrió un error');
      console.log(error);
    }
    setSubmitting(false);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post('https://automatizacion-xeev-production.up.railway.app/codigo/post-codigo', {
        codigo: data.codigo
      });
      setStatusMessage('¡Se añadio con exito!');
      console.log(response.data);
    } catch (error) {
      setStatusMessage('Ocurrió un error, espere un momento y vuelva a intentar.');
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="container my-5">
      <h1 className='fs-3 mb-3'>Cargar un nuevo código</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 border rounded">
        <div className="form-group">
          <label htmlFor="vendedor" className='mt-2'>Código vendedor</label>
          <input id="vendedor" type="text" className={`mt-3 form-control ${errors.vendedor && 'is-invalid'}`}
            {...register('vendedor', { required: true, pattern: /^[\wáéíóúñÁÉÍÓÚÑ]+$/g })}
          />
          {errors.vendedor?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.vendedor?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="codigo" className='mt-2'>Código</label>
          <input id="codigo" type="text" className={`mt-3 form-control ${errors.codigo && 'is-invalid'}`}
            {...register('codigo', { required: true, pattern: /^[\wáéíóúñÁÉÍÓÚÑ]+$/g })}
          />
          {errors.codigo?.type === 'required' && (
            <span className="invalid-feedback d-block">Campo requerido</span>
          )}
          {errors.codigo?.type === 'pattern' && (
            <span className="invalid-feedback d-block">Campo inválido</span>
          )}
        </div>
        <div className='d-flex flex-row-reverse mb-4 mt-4'>
        <button type="submit" className="btn btn-primary mt-3" disabled={submitting}>
          {submitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            'Crear'
          )}
        </button>
        </div>
        {statusMessage && (
          <div className={`alert ${statusMessage.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
            {statusMessage}
          </div>
        )}
      </form>
      <button type="button" className="btn btn-success mt-3" onClick={onClickk}>Comprobar funcionamiento</button>
    </div>
  );
}

export default CargarCodigo;