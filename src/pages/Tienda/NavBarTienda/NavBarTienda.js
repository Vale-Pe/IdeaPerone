import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBarTienda.css'

//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

/* recuerden importar Link o NavLink y no usar etiquetas a */

export const NavBarTienda = () => {
    const categories = [
    { id: 'a', address: '/', text: 'Todos los productos' },
    { id: 'b', address: '/category/A', text: 'Categoria A' },
    { id: 'c', address: '/category/B', text: 'Categoria B' },
    ];

    return (
        <section>
            {categories.map((cat) => {
                return (
                    <div className="links" key={cat.id}>
                        <NavLink
                            to={cat.address}
                            className={"link"}
                        >
                            {cat.text}
                        </NavLink>
                    </div>
                );
            })}
        </section>
    );
};

export default NavBarTienda