import { addDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { db } from '../index'
import { docs, getDocs, collection, query, where} from 'firebase/firestore'
import { CartContext } from "../components/Context/CartContext"

import './Form.css';
import { useParams } from 'react-router-dom';

const Form = (props) => {

    const { items, clearCart } = useContext(CartContext)

    const [newName, setNewName] = useState("")
    const [newMail, setNewMail] = useState("")
    const [newPhone, setNewPhone] = useState(0)
    const [newOrder, setNewOrder] = useState("")
    const params = useParams()
    const [item, setItem] = useState()

    let id = params.id

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

        const orderDoc = collection(db,"orders")
        getDocs(orderDoc)
        .then((order)=>{
            setNewOrder(order.docs.map((doc) => (doc.data())))
        })
    }, [])

    
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
        await addDoc(OrdersRef, orderData)
        console.log(OrdersRef)
        console.log(orderData)
    }

    return (
        <>
            <form onSubmit={submitHandler} className='bg-secondary d-flex row justify-content-center align-items-center'>
                <div className='input__datos'>
                    <div className='input__dato'>
                        <label>Nombre</label>
                        <input type='text' placeholder='Nombre' value={newName} onChange={nameHandler}/>
                    </div>
                    <div className='input__dato'>
                        <label>Mail</label>
                        <input type='email' placeholder='Mail'value={newMail} onChange={mailHandler}/>
                    </div>
                    <div className='input__dato'>
                        <label>Teléfono</label>
                        <input type='number' value={newPhone} onChange={phoneHandler}/>
                    </div>
                </div>
                <div className='btnConfirm'>
                    <button type='submit' className='btn btn-dark' onClick={finalizarCompra}>Confirmar</button>

                    {/* { finalizarCompra ? } */}
                </div>
            </form>
            <section>
                <p></p>
            </section>
        </>
    );
};



export default Form;