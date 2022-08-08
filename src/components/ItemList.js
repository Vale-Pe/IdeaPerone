import './ItemList.css';
import NavBarTienda from '../pages/Tienda/NavBarTienda/NavBarTienda'
import Item from "./Item";
import Footer from './Footer';


function ItemList(props) {

    return (
        <>
            <section className='itemList bg-secondary'>
                <h3 className='bienvenido'>Tienda</h3> 
                <NavBarTienda />
                <div className='catalogo d-flex p-2'>
                    {props.items.map((item) => (<Item {...item} key={item.id}  />))} 
                </div>
            </section>
            <Footer />
        </>
    );
}
export default ItemList;