import './Home.css'; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



function Home() {
    return (
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

{/*             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://m.media-amazon.com/images/I/51ElXCwsI7L._SY346_.jpg" class="d-block w-100" alt="Viaje submarino"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Aventura digital</h5>
                            <p>Escribí tu propio destino. Podés elegir qué camino tomar. Animate!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/514VD7FyriL._SY346_.jpg" class="d-block w-100 h-" alt="Titánic"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Libros clásicos</h3>
                            <p>¿Qué hubiera pasado en el Titánic si las decisiones las tomabas vos?</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/51KyBA7ze+L.jpg" class="d-block w-100" alt="Las joyas perdidas de Nabooti"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Historias originales</h3>
                            <p>Encontrá todos las historias y finales posibles.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
        </section>
    )
}

Home()

export default Home;