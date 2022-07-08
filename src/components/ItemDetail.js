import React from 'react';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import './ItemDetail.css'

function ItemDetail({id, title, category, price, description, pictureUrl, discount, greetings}) {

    return (
        <section className='seccionDetalle bg-secondary'>
            <h3>{greetings}</h3> 
            <div className='card card-detalle d-flex justify-content-evenly'>
                <img src={pictureUrl} alt={`Imagen del Producto ${id}`} />
                <h4>{title}</h4>
                <p className='fw-bold m-0'>${price}</p>
                <p className='m-0 p-2'>{description}</p>
                <ItemCount stock={5} initial={0}/>
                <Button variant="dark" className='m-3'>Agregar al carrito</Button>
            </div>
        </section>

    )
}

/* function ItemDetail({products}) {
    console.log(products)

    const producto = products[0]

    console.log(producto)

    return (
        <div className="detail-row">
        <img src="" alt="Imagen del producto" className="flex-col" />
        <section className="flex-col">
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <h2>{producto.price}</h2>
        </section>
    </div>
    );
} */

/* export const ItemDetail = ({
    id,
    title,
    category,
    description,
    price,
    pictureUrl,
    discount,
}) => {
    return (
        <div className="detail-row">
            <img src="" alt={`${id}-${title}`} className="flex-col" />
            <section className="flex-col">
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
            </section>
        </div>
    );
}; */

export default ItemDetail;