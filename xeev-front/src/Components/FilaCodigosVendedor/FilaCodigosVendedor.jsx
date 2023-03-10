import React from 'react'


function FilaJuegosAdmin( codigo ) {

    return (
    <>
        <tr>
            <td>{codigo.codigo._id}</td>
            <td>{codigo.codigo.title}</td>
            <td>{codigo.codigo.categorie}</td>
            <td>$ {codigo.codigo.price}</td>
            <td>
                {
                    codigo.codigo.published ? <BotonQuitarPublico codigo={codigo.codigo} /> : <BotonHacerPublico codigo={codigo.codigo} />
                }
            </td>
            <td>
            <div className="d-flex justify-content-evenly" >                                    
                <div>
                    {
                        codigo.codigo.favorite ? <BotonQuitarFavorito codigo={codigo.codigo} /> : <BotonHacerFavorito codigo={codigo.codigo} />
                    }
                </div>
                <div>
                    <ModalEditarJuego codigo={codigo.codigo}/>
                </div>
                <div>
                    <ModalBorrarJuego codigo={codigo.codigo}/>
                </div>
            </div>
            </td>
        </tr>
    </>
  )
}

export default FilaJuegosAdmin