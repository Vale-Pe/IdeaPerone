import './Item.css';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

function Item({id, title, category, price, pictureUrl}) {
    return(
        <Link to={`/product/${id}`}>
            <div className='card'>
                <img src={pictureUrl} alt='Imagen del producto' />
                <h4>{title}</h4>
                <p>Categoría: {category}</p>
                <p>{price}</p>
                <ItemCount stock={5} initial={0}/>
                <Button variant="dark" className='m-2'>Agregar al carrito</Button>
            </div>
        </Link>
    );
}

export default Item;