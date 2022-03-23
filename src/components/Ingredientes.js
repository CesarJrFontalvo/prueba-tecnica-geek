import React, { useEffect, useState } from 'react'
import { Button, Container, Navbar, Modal, Nav} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import { listResetaAsync } from '../actions/actionReseta';


const Ingredientes = ({
    price,
    result
}) => {

    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange2 = () => {
    //   setIsChecked(!isChecked);
    // };

    const navigate = useNavigate();
    // console.log(values.cantidad,values.seleccion)
    const dispatch = useDispatch();   

    
    const [numberSelecte, setNumberSelecte] = useState([]);
    const [items, setItems] = useState(0);
    const [envio, setEnvio] = useState(0);
    const [show, setShow] = useState(false);



   
    const handleChangeNumber=e=>{
        let number=null
        if (numberSelecte.includes(e.target.value)) {
            number=numberSelecte.filter(elemento=>elemento!==e.target.value)
        } else {
            number=numberSelecte.concat(e.target.value)
        }
        setNumberSelecte(number);
        console.log(number);
    }
// -------------------------------------------------------------
    const getFormattedPrice = (price) => `$ ${price.toFixed(2)}`;

    const [checkedState, setCheckedState] = useState(
       [false,false,false,false,false,false,false,false,false]
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
            if (currentState === true) {
                
            return sum + listaReseta[index].price;
            }
           
            return sum;
        },
        0
        
        );  
        
        setEnvio(7.00)
        setTotal(totalPrice);
        console.log(totalPrice)
        
    
    };
    function contar(elemento) {
        return elemento === true;
        
      }
   
    
    // MODAL-------------------
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleAcept = () => {
        navigate("/Ingredientes")
    }
// ------MOSTRAR DATOS DE FIREBASE -----------
    const { listaReseta } = useSelector(store => store.reseta);
    console.log(listaReseta);

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    useEffect(() => {
        dispatch(listResetaAsync())
        setItems(checkedState.filter(contar).length)
      
     }, [dispatch,checkedState])
    
    return (
        <div className='mb-5'>
            <Navbar className='car sticky-top ' bg="">
                <Container>
                    <Navbar.Brand href="#pagar" className="d-flex">
                        <svg id="car" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
                        </svg>
                    <Nav.Link as={Link} to="registro-ingredientes">Registrar ingrediente</Nav.Link>
                    </Navbar.Brand>
                    <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
                </Container>
            </Navbar>


            <div id="box" className='container mt-5'>

                <div className='container mb-5 mt-4'>
                    <h6 clasName="total">INGREDIENTES</h6>
                    <h1>Risotto de setas (vegano)</h1>
                </div>
                {/* <h6 className="azul"><input type="checkbox" checked={isChecked}
                             onChange={handleOnChange} /> Seleccionar todo | <input type="checkbox" /> Deseleccionar todo</h6> */}
                <hr className="azul" />

                <table className="table table-striped table-hover text-center mt-3 " >
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
                    <tbody >
                     
                        <tr  key={i}>
                            
                            <td><input 
                            id={`custom-checkbox-${i}`}
                            type="checkbox" 
                            name={e.product} 
                            value={e.product} 
                            checked={checkedState[i]}
                            onChange={() => handleOnChange(i)}/></td>

                            <td ><input id="number" className="azul" type="number" name='cantidad' value="1"onChange={handleChangeNumber}  /></td>
                            <td class="text-start">
                                <tr>{e.product}</tr>
                                <td>{e.marca}</td>
                                <tr>{e.quantity}</tr>
                            </td>
                            <td><strong>$ {e.price}</strong></td>
                        </tr>
                      

                    </tbody>
                      ))
                      }

                </table>

                <hr />
                <div className='container '>

                      <div >
                        <h6 className='mb-3 '>Items: <strong className='m-3 total ' > {items} </strong></h6>
                        
                        <h6 className='mb-3'>Subtotal:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        {getFormattedPrice (total) }</h6>

                        <h6 className='mb-3'>Gastos de envío:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                         {getFormattedPrice (envio)}</h6>

                       {
                           items > 0 ?
                            <h6 className='mb-3 total'>Total:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            <strong >{getFormattedPrice (total+ envio) }</strong></h6>
                        :
                            <h6 className='mb-3 total'>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            {getFormattedPrice (total) }</h6>
                       }
                      </div>

                    <div className="d-grid gap-2">
                            {
                                items > 0?
                                    <Button id="pagar" variant="success" size="lg" className='mb-2' onClick={handleShow}>
                                            Comprar ingredientes: {getFormattedPrice(total+envio)}
                                    </Button>
                                :
                                    <Button id="pagar" variant="success" size="lg" className='mb-2' onClick={handleShow}>
                                    Comprar ingredientes: {getFormattedPrice(total)}
                                    </Button>
                            }
                    </div>
                </div>
            </div>

             {/* Container Modal de la confirmacion de pago */}
             <Container>
                <Modal show={show}>
                    <Modal.Header className="modal-body">
                        <Modal.Title>Confirmacion de Compra 🧾</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        {
                            items >0 ?
                            <h4>Total a pagar: {getFormattedPrice(total+envio)}💵
                            <br></br><br></br>
                             Gracias por tu compra!! 🖐</h4>
                            :
                            <h4>Total a pagar: {getFormattedPrice(total)}💵 
                            <br></br><br></br>
                             No seleccionaste ningun ingrediente 🙁</h4>
                        }
                      
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="primary"
                            onClick={handleClose}>Seguir comprando</Button>
                        <Button variant="success" onClick={handleAcept}>
                            Pagar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )   
}

export default Ingredientes