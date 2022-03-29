import React, { useState } from 'react'
import { Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredienteAsync } from '../actions/actionReseta';
import ModalActualizar from './ModalActualizar';

const Lista = () => {

    const [modalUpdate, setModalUpdate] = useState(false)
    const [datosModal, setDatosModal] = useState()

    const dispatch = useDispatch();
    const { listaReseta } = useSelector(store => store.reseta);
    console.log(listaReseta);

    const actualizarModal = (nombre) => {
        const buscado = listaReseta.find((element) => element.product === nombre)

        setModalUpdate(true)
        setDatosModal(buscado)
    }
    

  return (
    <div>
         <Container>

         <table className="table table-striped table-hover text-center mt-3 " >
                    <thead>
                        <tr>
                           
                            <th >Producto</th>
                            <th >Marca</th>
                            <th >Precio</th>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                      {  
                      listaReseta.map((e, i) => (
                    <tbody >
                     
                        <tr  key={i}>
                            <td class="text-start">
                                <tr>{e.product}</tr>
                                
                            </td>
                            <td>{e.marca} </td>
                            <td><strong>$ {e.price}</strong></td>
                                
                        <td>
                        <input
                            value="Delete"
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteIngredienteAsync(e.product))}
                        /> 
                        </td>

                        <td>
                        <input
                        value="Modificar"
                        type="button"
                        className="btn btn-primary"
                        onClick={() => actualizarModal(e.product)}
                    />
                        </td>
                        </tr>
                      

                    </tbody>
                      ))
                      }

                </table>

                {
                    modalUpdate === true ? <ModalActualizar datosModal={datosModal} /> : ""
                }
</Container>
    </div>
  )
}

export default Lista