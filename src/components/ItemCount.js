import {useState} from 'react';
import Swal from 'sweetalert2'
import {Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ItemCount.css';
import { propTypes } from 'react-bootstrap/esm/Image';

function ItemCount({inicial, stock, onAdd, quantity, cantCart}){

    const [num, setNum] = useState (inicial);
    
    const sumar = () => {
        if (num < stock) {
            setNum (num + 1)
        } else {
            Swal.fire({
                text: `El máximo de productos permitidos es ${stock}`,
                icon: 'error',
            })
        }
    }
    const restar = () => {
        if (num > 0) {
        setNum (num - 1)
        }
    }

    const agregarCarrito = () =>{

        if (num !== 0) {
            onAdd(num)
        } else {
            return (
                Swal.fire({
                    text: `Debe agregar un producto`,
                    icon: 'error',
                })
            )
        }
    }

    return(
        <>
            <div className='btns d-flex column justify-content-between mx-3 my-2'>
                <button onClick={restar}>-</button>
                <p className='mb-0 mx-3'>{num}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button type="button" className="m-2 btn btn-seguirComprando border-dark">
                <Link to="/Tienda" className='text-decoration-none text-dark'>Seguir comprando</Link>
            </button>
            <Button variant="secondary" className='m-2 btn-add' onClick={agregarCarrito}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;