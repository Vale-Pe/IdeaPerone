import { addDoc, getDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { db } from '../index'
import Swal from "sweetalert2";
import { docs, getDocs, collection, query, where} from 'firebase/firestore'
import { CartContext } from "../components/Context/CartContext"

import './Form.css';
import { Link, useParams } from 'react-router-dom';

const Form = (props) => {

    const { items, clearCart } = useContext(CartContext)

    const [newName, setNewName] = useState("")
    const [newMail, setNewMail] = useState("")
    const [newPhone, setNewPhone] = useState(0)
    const [newOrder, setNewOrder] = useState("0")
    const [item, setItem] = useState()

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }

    const mailHandler = (event) => {
        setNewMail(event.target.value)
    }

    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const localDate = () => {
        const dateNow = new Date();
        const date = dateNow.toLocaleDateString("es-AR");
        return date;
    }

    const OrdersRef = collection(db, "orders")
    
    useEffect(() => {
        for (const item of items) {
            let it = item.item.products
            setItem(it)
        }
    }, [])

    const [price, setPrice] = useState(0)


    useEffect(() => {
        let precio = 0
        items.map(p => precio = ( precio + parseInt(p.item.products.price * p.quantity)))
        setPrice(precio)
    }, [])

    const orderData = {
        "buyer": {
            name: newName, 
            phone: newPhone, 
            mail: newMail},
        "items": item,
        "total": {price},
        "date": localDate()
    }

    const finalizarCompra = async () => {
        if (newName !== "" && newMail !== "" && newPhone != 0) {
            await addDoc(OrdersRef, orderData).then((doc) => {
                setNewOrder(doc.id)

                Swal.fire({
                    icon: 'success',
                    title: `Tu ID de compra es: ${doc.id}`,
                    html: `¡Muchas gracias por tu compra! Te enviamos más información a <strong>${newMail}</strong>`,
                    confirmButtonText: 'Ok!',
                    showCloseButton: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        clearCart()
                        setNewName("")
                        setNewMail("")
                        setNewPhone(0)
                        setNewOrder("")
                    }
                })
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Debe completar todos los campos',
                showCloseButton: true
            })
        }
    } 

    return (
        <>
            { newOrder !== "" ? 
            <form onSubmit={submitHandler} className='formCompra bg-secondary d-flex row justify-content-center align-items-center'>
                <div className='input__datos'>
                    <div className='input__dato'>
                        <label htmlFor='name' >Nombre</label>
                        <input type='text' id='name' placeholder='Nombre'value={newName} onChange={nameHandler} required/>
                    </div>
                    <div className='input__dato'>
                        <label htmlFor='email'>Mail</label>
                        <input type='email' id='email' placeholder='Mail'value={newMail} onChange={mailHandler} required/>
                    </div>
                    <div className='input__dato'>
                        <label htmlFor='phone' >Teléfono</label>
                        <input type='number' id='phone' value={newPhone} onChange={phoneHandler} required/>
                    </div>
                </div>
                <div className='btnConfirm'>
                    <button type='submit' className='btn btn-dark' onClick={finalizarCompra}>Finalzar compra</button>
                </div>
            </form> 
            : 
            <span className='fin bg-secondary d-flex justify-content-center align-items-center'>
                <button className='btn btn-warning'><Link to='/Home' className='text-decoration-none text-dark'>Ir al inicio</Link></button>
            </span>
            }
        </>
    );
};



export default Form;