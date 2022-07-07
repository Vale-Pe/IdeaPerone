import './Tienda.css'; 
import NavBarTienda from './NavBarTienda/NavBarTienda'

function Tienda() {
    return (
        <section className='tienda'>
            <p>Esta es la Tienda</p>
            <NavBarTienda />
        </section>
    )
}

Tienda()

export default Tienda;