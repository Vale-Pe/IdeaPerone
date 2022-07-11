import React from 'react';
import {useState} from 'react';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

function ItemDetail({id, title, category, price, description, pictureUrl, discount, greetings}) {

    const [ cantCart, setCantCart ] = useState(0);
    const [ counter, setCounter ] = useState(true);
    const [ compra, setCompra ] = useState(false);

    const onAdd = (cantidad) => {
        setCantCart(cantidad)
        setCounter(false)
        setCompra(true)
    }

    console.log(cantCart)


    return (
        <section className='seccionDetalle bg-secondary'>
            <h3>{greetings}</h3> 
            <div className='card card-detalle d-flex justify-content-evenly'>
                <img src={pictureUrl} alt={`Imagen del Producto ${id}`} />
                <h4>{title}</h4>
                <p className='fw-bold m-0'>${price}</p>
                <p className='m-0 p-2'>{description}</p>
                { counter === true && <ItemCount inicial={0} stock={5} onAdd={onAdd} />}
                { compra === true && <Button variant="dark" className='btnFin m-2 px-4' ><Link to='../Cart' className='text-decoration-none text-white fw-bold'>Terminar compra</Link></Button>}
                {/* <ItemCount stock={5} initial={0} onAddHandler={onAdd}/> */}
            </div>
        </section>
    )
}


export default ItemDetail;