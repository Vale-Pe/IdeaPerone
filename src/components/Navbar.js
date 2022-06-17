import logo from '../logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from './Carrito.js';
import './Navbar.css';

export function NavbarReact() {
    return (
        <header>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="align-top">
                        <Navbar.Brand href="#home" className="d-flex align-center">
                            <img
                                alt=""
                                src= {logo}
                                width="30"
                                height="30"
                                className="d-inline-block"
                            />{' '}
                            <p className="mb-0 ms-4 d-none d-lg-block">Nombre de mi tienda</p>
                        </Navbar.Brand>
                        <div className="d-flex">
                            <div className='d-inline d-lg-none'><Carrito/></div>
                            <div>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-2' />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
                                        <Nav.Link href="#tienda" className='navLink'>Tienda</Nav.Link>
                                        <Nav.Link href="#nosotros" className='navLink'>Nosotros</Nav.Link>
                                        <Nav.Link href="#contacto" className='navLink'>Contacto</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            <div className='d-none d-lg-inline'><Carrito/></div>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}

export default NavbarReact;