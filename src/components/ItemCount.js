import {useState} from 'react';
import Swal from 'sweetalert2'
import './ItemCount.css';

function ItemCount({stock}){
    const [num, setNum] = useState (0);
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
    return(
        <div className='btns d-flex column justify-content-between mx-3'>
            <button onClick={restar}>-</button>
            <p className='mb-0 mx-3'>{num}</p>
            <button onClick={sumar}>+</button>
        </div>
    );
}

export default ItemCount;