import React from 'react';
import {useState} from 'react';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

function ItemDetail({id, title, category, price, description, pictureUrl, discount, greetings}) {

    const [cantidad, setCantidad] = useState(false)

    const agregarAlCarrito = () => {
        setCantidad(!cantidad)
    }

    return (
        <section className='seccionDetalle bg-secondary'>
            <h3>{greetings}</h3> 
            <div className='card card-detalle d-flex justify-content-evenly'>
                <img src={pictureUrl} alt={`Imagen del Producto ${id}`} />
                <h4>{title}</h4>
                <p className='fw-bold m-0'>${price}</p>
                <p className='m-0 p-2'>{description}</p>
                <ItemCount stock={5} initial={0} onAdd={agregarAlCarrito}/>
            </div>
        </section>
    )
}


export default ItemDetail;