import React, { useContext, useState } from 'react';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';
import './ItemDetail.css'

function ItemDetail(props) {

    console.log(props.products)

    const [ cantCart, setCantCart ] = useState(0);
    const [ counter, setCounter ] = useState(true);
    const [ compra, setCompra ] = useState(false);
    const producto = useState("producto")
    const productos = useState("productos")

    const { addToCart } = useContext(CartContext); 

    const onAdd = (num) => {
        setCantCart(num)
        setCounter(false)
        setCompra(true)
        addToCart(props, num)
    }

    let unidad

    if (cantCart === 1) {
        unidad = producto[0]
    } else {
        unidad = productos[0]
    }

    return (
        <section className='seccionDetalle bg-secondary'>
            <h3>Detalle</h3> 
            <div className='card card-detalle d-flex justify-content-evenly'>
                <img src={props.products.pictureUrl} alt={`Imagen del Producto ${props.products.id}`} />
                <h4>{props.products.title}</h4>
                <p className='fw-bold m-0'>${props.products.price}</p>
                <p className='m-0 p-2'>{props.products.description}</p>
                { counter === true && <ItemCount inicial={0} stock={5} onAdd={onAdd} cantCart={cantCart} quantity={props.products.quantity}/>}
                { compra === true && <><p className='fw-bold text-warning'>Agregaste {cantCart} {unidad}</p><Button variant="dark" className='m-2 px-4' ><Link to='../Cart' className='text-decoration-none text-white fw-bold' quantity={props.products.quantity} items={props.products}>Ver carrito</Link></Button></>}
                {/* <ItemCount stock={5} initial={0} onAddHandler={onAdd}/> */}
            </div>
        </section>
    ) 
}


export default ItemDetail;