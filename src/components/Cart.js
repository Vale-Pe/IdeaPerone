import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext'
import './Cart.css'

const Cart = ({greetings}) => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
            <div className="cart">
                <h3>{greetings}</h3>
                <p>No hay productos en el carrito.</p>
                <button type="button" className="btn btn-warning"><Link to="/Tienda" className='text-decoration-none text-secondary'>Volver a la Tienda</Link></button>
            </div>
    )}else{
        return(
            <div className="cart">
                <h3>{greetings}</h3> 
                {
                    cart.map(item =>(
                        <div className="p-4" key={item.id}>
                            <img className="img-fluid cartItemImg" src={item.pictureUrl} />
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <div className="btn btn-warning btn-sm" onClick={() => removeFromCart(item.id)}>Eliminar producto</div>
                        </div>
                    ))
                }
                <div className="mt-2 btn btn-danger btn-sm" onClick={() => clearCart()}>Vaciar carrito</div>
            </div>
        )
    }
}
export default Cart