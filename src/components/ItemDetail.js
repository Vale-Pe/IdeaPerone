import React, { useContext, useState } from 'react';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import Footer from './Footer';

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
        <>
            <section className='seccionDetalle bg-dark'>
                <h3>Detalle</h3> 
                <div className='card'>
                    <div className='d-flex column card-detalle '>
                        <div className='d-flex justify-content-evenly px-3 pt-3'>
                            <img src={props.products.pictureUrl} alt={`Imagen del Producto ${props.products.id}`} />
                        </div>
                        <div className='d-flex row px-3 pt-3'>
                            <h4>{props.products.title}</h4>
                            <p className='fw-lighter detalle'>{props.products.description}</p>
                            <p >${props.products.price}</p>
                        </div>
                    </div>
                    <div>
                        { counter === true && <ItemCount inicial={0} stock={5} onAdd={onAdd} cantCart={cantCart} quantity={props.products.quantity}/>}
                        { compra === true && <><p className='fw-bold text-secondary'>Agregaste {cantCart} {unidad}</p><Button variant="dark" className='m-2 px-4 btn-verCarrito' ><Link to='../Cart' className='text-decoration-none text-white ' quantity={props.products.quantity} items={props.products}>Ver carrito</Link></Button></>}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    ) 
}


export default ItemDetail;