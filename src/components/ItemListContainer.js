import './ItemListContainer.css';
import Card from './Card';

function ItemListContainer(props){
    return(
        <div className="lead py-4 d-flex row justify-content-evenly align-items-center h-100">
            <p className='bienvenidos text-uppercase mb-4'>{props.greetings}</p>
            <h2 className='fw-semibold text-uppercase mb-4'>Productos</h2>
            <div className='items'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default ItemListContainer;