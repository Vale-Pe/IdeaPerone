import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react"
import { CartContext } from './Context/CartContext';
import { NavLink } from 'react-router-dom';

function CartWidget(){

    const { items } = useContext(CartContext);

    let suma = 0
    items.map(i => suma = ( suma + parseInt(i.quantity)))

    return(
        <div >
            <NavLink className='d-flex column justify-content-center align-items-center' to='../Cart'>
                <FontAwesomeIcon icon={faCartShopping} className='text-secondary'/>
                { suma != 0 && <div className='d-flex justify-content-center bg-warning text-dark rounded-circle' style={{width: 24}}>{ suma }</div>}
            </NavLink>
        </div>
    );
}

export default CartWidget;