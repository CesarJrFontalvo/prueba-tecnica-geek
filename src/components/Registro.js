import { Container, Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import {useDispatch} from 'react-redux';

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro  = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div>
            <Container className="mt-4">
            <Form id="Form" onSubmit={handleRegistro}
            >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Confirmar contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit" className="me-3">
                    Registrarse
                </Button>

                <Button variant="success" >
                     <Link to="/login" id="irLogin" >Ir a Login</Link>
                </Button>

            </Form>
        </Container>
        </div>
    )
}