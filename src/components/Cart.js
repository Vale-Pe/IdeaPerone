import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { CartContext } from './Context/CartContext'
import './Cart.css'
import Footer from "./Footer";

const Cart = () => {
    const { items, removeFromCart, clearCart } = useContext(CartContext);
    const [price, setPrice] = useState(0)


    useEffect(() => {
        let precio = 0
        items.map(p => precio = ( precio + parseInt(p.item.products.price * p.quantity)))
        setPrice(precio)
    }, [])
    
    
    if (items.length === 0) {
        return (
            <>
                <div className="cart bg-dark">
                    <h3>Carrito</h3>
                    <p>No hay productos en el carrito.</p>
                    <button type="button" className="btn btn-warning"><Link to="/Tienda" className='text-decoration-none text-dark'>Volver a la Tienda</Link></button>
                </div>
                <Footer />
            </>
    )}else{
        return(
            <>
                <div className="cart bg-dark">
                    <h3>Carrito</h3>
                    <div className="d-flex row justify-content-center">
                    {
                        items.map(item =>(
                            <div className="p-1 card" key={item.item.products.id}>
                                <Link to={`/product/${item.item.products.id}`}><img className="img-fluid cartItemImg" src={item.item.products.pictureUrl} alt='Imagen del producto' /></Link>
                                <Link to={`/product/${item.item.products.id}`} className="text-decoration-none"><h4 className="text-decoration-underline">{item.item.products.title}</h4></Link>
                                <p>Cantidad: {item.quantity}</p>
                                <p>${item.item.products.price}</p>
                                <div className="btn btn-warning btn-sm mt-2" onClick={() => removeFromCart(item.item.products.id)}>Eliminar producto</div>
                            </div>
                        ))
                    }
                    </div>
                    <div>
                        { price !== 0 && <p className="m-3">TOTAL A PAGAR: ${price}</p> }
                        <button type="button" className="m-2 btn btn-seguirComprando"><Link to="/Tienda" className='text-decoration-none text-dark'>Seguir comprando</Link></button>
                        <div className="m-2 btn btn-vaciarCart text-white" onClick={() => clearCart()}>Vaciar carrito</div>
                        <div className="m-2 btn btn-comprar"><Link to="/Form" className='text-decoration-none text-white' price="price">Confirmar</Link></div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Cart