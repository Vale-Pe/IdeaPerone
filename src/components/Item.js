import './Item.css';
import React, { useContext, useState } from 'react';
import { CartContext } from './Context/CartContext'
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function Item(props /* {id, title, category, price, pictureUrl} */) {

    return(
        <div className='card'>
            <Link to={`/product/${props.id}`}>
                <div>
                    <img src={props.pictureUrl} alt='Imagen del producto' />
                </div>
            </Link>
            <Link to={`/product/${props.id}`}>
                <div>
                    <h4>{props.title}</h4>
                </div>
            </Link>
            <p>${props.price}</p>
            <Link to={`/product/${props.id}`}>
                <button className='btn btn-dark'>Ver detalle</button>
            </Link>
        </div>
    );
}

export default Item;