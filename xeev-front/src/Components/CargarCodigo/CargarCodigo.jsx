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
      const response = await axios.get('http://localhost:8000/users/obtener-users');
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
      const response = await axios.post('http://localhost:8000/codigo/agregar-codigo', {
        lineId: data.vendedor,
        codeValue: data.codigo
      });
      setStatusMessage('Proceso finalizado');
      console.log(response.data);
    } catch (error) {
      setStatusMessage('Ocurrió un error');
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="container my-5">
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

        <button type="submit" className="btn btn-danger mt-3" disabled={submitting}>
          {submitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            'Crear'
          )}
        </button>
        {statusMessage && (
          <div className={`alert ${statusMessage.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
            {statusMessage}
          </div>
        )}
      </form>
      <button type="button" onClick={onClickk} className="btn btn-success mt-3" disabled={submitting}>
          {submitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            'Crear'
          )}
        </button>
    </div>
  );
}

export default CargarCodigo;