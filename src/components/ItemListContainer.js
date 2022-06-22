import './ItemListContainer.css';

function ItemListContainer(props){
    return(
        <div className="lead py-4 text-uppercase bg-secondary">
            <h1 className='bienvenidos mb-4'>{props.greetings}</h1>
            <h2 className='fw-semibold'>Productos</h2>
        </div>
    );
}

export default ItemListContainer;