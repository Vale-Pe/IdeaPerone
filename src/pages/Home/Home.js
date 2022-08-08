import './Home.css'; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function Home() {
    return (
        <>
            <section className='home'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block img-carousel"
                            src="https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/1961/7/w1280/7XKqAuDtkXauKFxZ8Q4qCcVDWJP.jpg"
                            alt="Viaje submarino"
                        />
                        <Carousel.Caption>
                            <h3><Link to='/Tienda' className='text-decoration-none text-white'>Aventura digital</Link></h3>
                            <p className='p-carousel'>Escribí tu propio destino. Podés elegir qué camino tomar. Animate!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-carousel"
                            src="https://culturacolectiva.com/resizer/E5ZCXqJuUUJxN94HpBBF2Sq5oqs=/arc-photo-culturacolectiva/arc2-prod/public/7F5W2WTA3ZBB7FZTRDFO6KB2RU.jpg"
                            alt="Titánic"
                        />
                        <Carousel.Caption>
                            <h3><Link to='/category/Libros-clásicos' className='text-decoration-none text-white'>Libros clásicos</Link></h3>
                            <p className='p-carousel'>¿Qué hubiera pasado en el Titánic si las decisiones las tomabas vos?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-carousel"
                            src="https://services.meteored.com/img/article/hasta-el-espacio-y-mas-alla-18261-12_1024.jpg"
                            alt="Más allá del espacio"
                        />
                        <Carousel.Caption>
                            <h3><Link to='/category/Libros-originales' className='text-decoration-none text-white'>Historias originales</Link></h3>
                            <p className='p-carousel'>Encontrá todos las historias y finales posibles.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <Footer />
        </>
    )
}

Home()

export default Home;