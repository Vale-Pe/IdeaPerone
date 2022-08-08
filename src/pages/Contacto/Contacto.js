import './Contactos.css'; 
import Swal from "sweetalert2";
import Footer from '../../components/Footer';

function Contactos() {

    const enviarMensaje = () => {
        Swal.fire({
            icon: 'success',
            text: 'Tu mensaje ha sido enviado',
            showCloseButton: true
        })
    } 

    return (
        <>
            <section className='contactos bg-dark'>
                <h3>Formulario de contacto</h3>
                <form onSubmit={enviarMensaje} className='form__contacto d-flex row justify-content-center fs-6'>
                    <div className='input__datos'>
                        <div >
                            <label htmlFor='name' >Nombre</label>
                            <input type='text' id='name' className='datos' required/>
                        </div>
                        <div >
                            <label htmlFor='email'>Mail</label>
                            <input type='email' id='email' className='datos' required/>
                        </div>
                        <div >
                            <label htmlFor='phone' >Teléfono</label>
                            <input type='number' id='phone' className='datos' required/>
                        </div>
                        <div >
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea id='mensaje'></textarea>
                        </div>
                    </div>
                    <div className='btnConfirm'>
                        <button type='submit' className='btn btn-dark'>Enviar</button>
                    </div>
                </form> 
            </section>
            <Footer />
        </>
    )
}

Contactos()

export default Contactos;