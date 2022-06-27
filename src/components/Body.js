import './Body.css';
import ItemListContainer from './ItemListContainer';
// import Footer from './components/Footer';


function Body(){
    return(
        <>
            <section className='cuerpo bg-secondary'>
                <ItemListContainer greetings='¡Bienvenidos!' />
            </section>
            {/* <Footer nombre='React Js' /> */}
        </>
    );
}

export default Body;