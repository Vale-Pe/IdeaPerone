import './ItemList.css';
import NavBarTienda from '../pages/Tienda/NavBarTienda/NavBarTienda'
import Item from "./Item";


function ItemList(props) {

    return (
        <section className='itemList bg-secondary'>
            <h3 className='bienvenido'>¡Bienvenido!</h3> 
            <NavBarTienda />
            <div className='catalogo d-flex p-2'>
                {props.items.map((item) => (<Item {...item} key={item.id}  />))} 
            </div>
        </section>
    );
}
export default ItemList;