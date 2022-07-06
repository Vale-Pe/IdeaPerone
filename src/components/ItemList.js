import './ItemList.css';

import Item from "./Item";


function ItemList({items}) {

    return (
        <section>
            <div className='catalogo d-flex justify-content-center p-4'>
                {items?.map(i => <Item id={i.id} title={i.title} category={i.category} price={i.price} description={i.description} key={i.id} />)} 
            </div>
        </section>
    );
}
export default ItemList;