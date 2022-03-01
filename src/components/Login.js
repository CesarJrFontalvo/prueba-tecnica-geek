import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle} from '../actions/actionLogin';

function Login() {
    
    const dispatch = useDispatch();// crear la referencia del dispatch

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));

    }

    const handleGoogle = () => {
         dispatch(loginGoogle());
        
    }
  return (
   
    <div id="contenImgLogin">

    {/* <img id="block-icon" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1644873384/Proyecto2/blockmaster_Mesa_de_trabajo_1_vjpe0r.png"  alt="google button" className="Form"/> */}
<Container id="contenLogin" className="mt-4">
<Form id="Form" onSubmit={handleLogin}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Correo:</Form.Label>
       <Form.Control
           type="email"
           placeholder="Ingresa tu email"
           name="email"
           value={email}
           onChange={handleInputChange} />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label >Contraseña:</Form.Label>
       <Form.Control
           type="password"
           placeholder="Ingresa tu contraseña"
           name="password"
           value={password}
           onChange={handleInputChange} />
   </Form.Group>
   <Button variant="success" type="submit" className="me-4">
       Enviar
   </Button>

   <Button variant="danger" >
   <Link to="/registro" id="buttonRegistrrse" >Registrarse</Link>
   </Button>

   <Container className="auth__social-networks mt-5 ">
   <Form.Label >Iniciar con Google</Form.Label>
       <Container
           className="google-btn"
           onClick={handleGoogle}

       >
           <Container className="google-icon-wrapper">
               <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
           </Container>
       </Container>
   </Container>

</Form>
</Container>
</div>
  )
}

export default Login