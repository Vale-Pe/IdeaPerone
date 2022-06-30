import './Item.css';
import {Button } from "react-bootstrap";
import ItemCount from './ItemCount';

function Item(props) {
    return(
        <div className='card d-flex justify-content-evenly'>
            <img src='' alt='Imagen del producto' />
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <ItemCount stock={5} initial={0}/>
            <Button variant="dark" className='m-3'>Agregar al carrito</Button>
        </div>
    );
}

export default Item;