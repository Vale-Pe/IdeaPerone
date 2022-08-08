import React from 'react';
import logo from '../logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Nosotros } from '../pages/Nosotros/Nosotros';
import { Contacto } from '../pages/Contacto/Contacto';
import './Navbar.css';

export function NavbarReact() {
    return (
        <header>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className='navContainer px-0 align-items-start'>
                        <div className='logo px-2'>
                            <Navbar.Brand>
                                <NavLink to='Home' >
                                    <img
                                        alt=""
                                        src= {logo}
                                        width="30"
                                        height="30"
                                    />{' '}
                                    <p className={"mb-0 ms-4 d-none d-lg-block"}>Elige tu propia aventura</p>
                                </NavLink>
                            </Navbar.Brand>
                        </div>
                        <div className="divCarritoButton d-flex">
                            <div className='carrito d-flex d-lg-none align-items-center me-2'><NavLink to='Cart' ><CartWidget/></NavLink></div>
                            <div className='navCollapse bg-dark px-2 d-lg-flex align-items-center' >
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-2' />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className='navbarLinks bg-dark'>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'linkNav')} to='Home' >Home</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'linkNav')} to='Tienda' >Tienda</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'linkNav')} to='Nosotros' >Nosotros</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'linkNav')} to='Contacto' >Contacto</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            {<div className='carrito d-none d-lg-flex align-items-center ms-2'><NavLink to='Cart' ><CartWidget/></NavLink></div>}
                        </div>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}
export default NavbarReact;