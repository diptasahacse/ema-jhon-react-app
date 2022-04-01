import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/solid'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                        <Link className='nav-link' to='/contacts'>Contacts</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;