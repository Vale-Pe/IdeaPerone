import React from 'react';
import logo from '../logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Tienda } from '../pages/Tienda/Tienda';
import { Nosotros } from '../pages/Nosotros/Nosotros';
import { Contacto } from '../pages/Contacto/Contacto';
import './Navbar.css';

export function NavbarReact() {
    return (
        <header>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className='px-0'>
                        <div className='logo px-2 d-flex align-items-center'>
                            <Navbar.Brand className="d-flex align-items-center">
                                <NavLink to='Home' >
                                    <img
                                        alt=""
                                        src= {logo}
                                        width="30"
                                        height="30"
                                        className="d-inline-block"
                                    />{' '}
                                    <p className={"mb-0 ms-4 d-none d-lg-block"}>Nombre de mi tienda</p>
                                </NavLink>
                            </Navbar.Brand>
                        </div>
                        <div className="d-flex">
                            <div className='carrito d-flex d-lg-none align-items-center me-2'><CartWidget/></div>
                            <div className='navCollapse bg-dark px-2 d-lg-flex align-items-center' >
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-2' />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : '')} to='Home' >Home</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : '')} to='Tienda' >Tienda</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : '')} to='Nosotros' >Nosotros</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : '')} to='Contacto' >Contacto</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            {<div className='carrito d-none d-lg-flex align-items-center ms-2'><CartWidget/></div>}
                        </div>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}
export default NavbarReact;

/* import React from 'react';
import logo from '../logo.png';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import './Navbar.css';

function NavbarReact() {
    return (
        <header>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className='px-0'>
                        <div className='logo px-2 d-flex align-items-center'>
                            <Navbar.Brand href="#home" className="d-flex align-items-center">
                                <img
                                    alt=""
                                    src= {logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block "
                                />{' '}
                                <p className="mb-0 ms-4 d-none d-lg-block">Nombre de mi tienda</p>
                            </Navbar.Brand>
                        </div>
                        <div className="d-flex">
                            <div className='carrito d-flex d-lg-none align-items-center me-2'><CartWidget/></div>
                            <div className='navCollapse bg-dark px-2 d-lg-flex align-items-center' >
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-2' />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
                                        <Nav.Link href="#tienda" className='navLink'>Tienda</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            {<div className='carrito d-none d-lg-flex align-items-center ms-2'><CartWidget/></div>}
                        </div>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}

export default Navbar; */