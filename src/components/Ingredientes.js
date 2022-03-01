import React, { useEffect, useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listResetaAsync } from '../actions/actionReseta';
import {useForm } from '../hooks/useForm';

const Ingredientes = ({
    price,
    result
}) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

    const [ values, handleInputChange ] = useForm({
        cantidad:'',
        seleccion:'',
       
    })

    const {cantidad} = values;
    // console.log(values.cantidad,values.seleccion)
    const dispatch = useDispatch();

    
    
    const { listaReseta } = useSelector(store => store.reseta);
    console.log(listaReseta);

   
    

    
    useEffect(() => {
        dispatch(listResetaAsync())
       console.log(values)
       
        
     }, [dispatch,values])
    
    return (
        <div className='mb-5'>
            <Navbar className='car sticky-top ' bg="">
                <Container>
                    <Navbar.Brand href="#pagar">
                        <svg id="car" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
                        </svg>
                    </Navbar.Brand>
                </Container>
            </Navbar>


            <div id="box" className='container mt-5'>

                <div className='container mb-5 mt-4'>
                    <h6>INGREDIENTES</h6>
                    <h1>Risotto de setas (vegano)</h1>
                </div>
                <h6 className="azul"><input type="checkbox" /> Seleccionar todo | <input type="checkbox" /> Deseleccionar todo</h6>
                <hr className="azul" />

                <table className="table text-center mt-3 " >
                    <thead>
                        <tr>
                            <th >Selecciona</th>
                            <th >Cantidad</th>
                            <th class="text-start" scope="col">Aticulo</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                      {  
                      listaReseta.map((e, i) => (
                    <tbody key={i}>
                      
                      
                          
                        <tr  >
                            
                            <td><input id="check" type="checkbox" name="seleccion"   checked={isChecked}
                             onChange={handleOnChange} /></td>
                            <td ><input id="number" className="azul" type="number" name='cantidad' values={cantidad} onChange={handleInputChange}  /></td>
                            <td class="text-start">
                                <tr>{e.product}</tr>
                                <td>{e.marca}</td>
                                <tr>{e.quantity}</tr>
                            </td>
                            <td>$ {e.price}</td>
                        </tr>
                      

                    </tbody>
                      ))
                      }

                </table>

                <hr />
                <div className='container '>

                    <h6 className='mb-3'>Items:  {isChecked ? "Seleccionaste todos los productos" : ""}</h6>
                    <h6 className='mb-3'>Subtotal</h6>
                    <h6 className='mb-3'>Gastos de envío {price}</h6>
                    <h6 className='mb-3'>Total {cantidad}</h6>
          
                    <div className="d-grid gap-2">
                        <Button id="pagar" variant="success" size="lg" className='mb-2'>
                            Comprar ingredientes:
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredientes