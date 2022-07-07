import './Tienda.css'; 
import NavBarTienda from './NavBarTienda/NavBarTienda'
import ItemListContainer from '../../components/ItemListContainer'

function Tienda() {
    return (
        <section className='tienda'>
            <p>Esta es la Tienda</p>
            <NavBarTienda />
            {/* <ItemListContainer /> */}
        </section>
    )
}

Tienda()

export default Tienda;