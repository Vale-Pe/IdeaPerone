import './ItemList.css';

import Item from "./Item";


function ItemlList({items}) {

    return (
        <section>
            <div className='catalogo d-flex justify-content-center p-4'>
                {items?.map(item => <Item id={item.id} title={item.title} category={item.category} price={item.price} description={item.description} key={item.id} />)} 
            </div>
        </section>
    );
}
export default ItemlList;