import './Card.css';
import ItemCount from './ItemCount';

function Card(){
    return(
        <div className='card d-flex justify-content-evenly'>
            <img src='' alt='Imagen del producto' />
            <h4>Producto</h4>
            <p>Precio</p>
            <ItemCount stock={5} />
        </div>
    );
}

export default Card;