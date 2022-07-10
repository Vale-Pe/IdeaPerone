import './ItemList.css';
import NavBarTienda from '../pages/Tienda/NavBarTienda/NavBarTienda'
import Item from "./Item";


function ItemList({items, greetings}) {

    return (
        <section className='itemList bg-secondary'>
            <h3 className='bienvenido'>{greetings}</h3> 
            <NavBarTienda />
            <div className='catalogo d-flex p-2'>
                {items?.map((item) => (<Item {...item} key={item.id} />))} 
            </div>
        </section>
    );
}
export default ItemList;