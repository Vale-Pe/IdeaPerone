import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer(props){

    return(
        <section>
                <div className="lead py-4 d-flex row justify-content-evenly align-items-center h-100">
                <p className='bienvenidos text-uppercase mb-4'>{props.greetings}</p>
                <h2 className='fw-semibold text-uppercase mb-4'>Productos</h2>
                <ItemList />
            </div>
        </section>
    
    );
}

export default ItemListContainer;