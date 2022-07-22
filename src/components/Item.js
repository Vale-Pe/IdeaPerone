import './Item.css';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function Item(props /* {id, title, category, price, pictureUrl} */) {
    return(
        <Link to={`/product/${props.id}`}>
            <div className='card'>
                <img src={props.pictureUrl} alt='Imagen del producto' />
                <h4>{props.title}</h4>
                <p>Categoría: {props.category}</p>
                <p>${props.price}</p>
                {/* <ItemCount stock={5} initial={0}/> */}
                {/* <Button variant="dark" className='m-2'>Agregar al carrito</Button> */}
            </div>
        </Link>
    );
}

export default Item;