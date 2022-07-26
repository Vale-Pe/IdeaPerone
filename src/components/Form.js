import { addDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { db } from '../index'
import { doc, getDoc, collection, query, where} from 'firebase/firestore'
import { CartContext } from "../components/Context/CartContext"

import './Form.css';
import { useParams } from 'react-router-dom';

const Form = () => {

    const { items, clearCart } = useContext(CartContext)

    console.log(...items)

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

        const orderDoc = query(collection(db,"orders"), where ("id", "==", id))
        getDoc(orderDoc)
        .then((order)=>{
            setNewOrder({
                id:order.id, 
                ...order.data()
            });
        })
    }, [id])

    console.log(newOrder)

    for (const item of items) {
        let it = item.item.products
        setItem(it)
    }

    const orderData = {
        "buyer": {name: newName, phone: newPhone, mail: newMail},
        "items": item,
        //"total": {precio},
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
                <p>{newOrder}</p>
            </section>
        </>
    );
};



export default Form;