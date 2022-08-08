import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBarTienda.css';

//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

/* recuerden importar Link o NavLink y no usar etiquetas a */

export const NavBarTienda = () => {
    const categories = [
    { id: 'a', address: '/Tienda', text: 'Todos los libros' },
    { id: 'b', address: '/category/Libros-clásicos', text: 'Libros clásicos' },
    { id: 'c', address: '/category/Libros-originales', text: 'Libros originales' },
    ];

    return (
        <section>
            {categories.map((cat) => {
                return (
                    <div className="links" key={cat.id}>
                        <Link to={cat.address}> {cat.text}</Link>
                    </div>
                );
            })}
        </section>
    );
};

export default NavBarTienda