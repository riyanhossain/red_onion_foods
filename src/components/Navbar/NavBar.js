import React from 'react'
import { Button, Col, Row, Navbar, Container,Nav } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className='logo' /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#cart" className='cart'><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                <Nav.Link href="#Login" className='login'>Login</Nav.Link>
                <Button variant="danger" className='signup'>Sign up</Button>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar