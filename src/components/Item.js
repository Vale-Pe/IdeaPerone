import './Item.css';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function Item({id, title, category, price}) {
    return(
        <Link to={`/product/${id}`}>
            <div className='card d-flex justify-content-evenly'>
                <img src='' alt='Imagen del producto' />
                <h4>{title}</h4>
                <p>{price}</p>
                <ItemCount stock={5} initial={0}/>
                <Button variant="dark" className='m-3'>Agregar al carrito</Button>
            </div>
        </Link>
    );
}

export default Item;