
import React from 'react'
import { Container, Nav, Navbar ,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../actions/actionLogin';


const RegistroIngredientes = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();  

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
  return (
    <div className='mb-5'>
         <Navbar className='car sticky-top ' bg="">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="d-flex">
                        <svg id="car" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
                        </svg>
                        <Nav.Link as={Link} to="/">Volver a ingredientes</Nav.Link>
                    </Navbar.Brand>
                    <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
                </Container>
            </Navbar>
    </div>
  )
}

export default RegistroIngredientes