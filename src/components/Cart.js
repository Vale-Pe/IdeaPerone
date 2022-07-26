import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext'
import './Cart.css'

const Cart = (props) => {
    const { items, removeFromCart, clearCart } = useContext(CartContext);

    let precio = 0
    items.map(p => precio = ( precio + parseInt(p.item.products.price * p.quantity)))
    
    /* console.log(precio) */
    
    if (items.length === 0) {
        return (
            <div className="cart">
                <h3>Carrito</h3>
                <p>No hay productos en el carrito.</p>
                <button type="button" className="btn btn-warning"><Link to="/Tienda" className='text-decoration-none text-secondary'>Volver a la Tienda</Link></button>
            </div>
    )}else{
        return(
            <div className="cart">
                <h3>Carrito</h3> 
                {
                    items.map(item =>(
                        <div className="p-3 card" key={item.item.products.id}>
                            <img className="img-fluid cartItemImg" src={item.item.products.pictureUrl} alt='Imagen del producto' />
                            <h4>{item.item.products.title}</h4>
                            <p>Cantidad: {item.quantity}</p>
                            <p>${item.item.products.price /* * item.quantity */}</p>
                            <div className="btn btn-warning btn-sm mt-2" onClick={() => removeFromCart(item.item.products.id)}>Eliminar producto</div>
                        </div>
                    ))
                }
                <div>
                    { precio !== 0 && <p className="m-3">TOTAL A PAGAR: ${precio}</p> }
                    <button type="button" className="m-2 btn btn-primary btn-sm"><Link to="/Tienda" className='text-decoration-none text-white'>Seguir comprando</Link></button>
                    <div className="m-2 btn btn-danger btn-sm" onClick={() => clearCart()}>Vaciar carrito</div>
                    <div className="m-2 btn btn-dark btn-sm"><Link to="/Form" className='text-decoration-none text-white'>Terminar compra</Link></div>
                </div>
            </div>
        )
    }
}
export default Cart