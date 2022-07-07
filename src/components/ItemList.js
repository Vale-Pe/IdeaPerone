import './ItemList.css';

import Item from "./Item";


function ItemList({items}) {

    return (
        <section>
            <div className='catalogo d-flex justify-content-center p-4'>
                {items?.map((item) => (<Item {...item} key={item.id} />))} 
            </div>
        </section>
    );
}
export default ItemList;