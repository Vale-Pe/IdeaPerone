// import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../index'
import { doc, getDoc} from 'firebase/firestore'

function ItemDetailContainer({greetings}) {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams() 

    useEffect(() => {
        setLoading(true)

            const docRef = doc(db,"libros", itemId)
            getDoc(docRef)
            .then((prod)=>{
                setProducts({
                    id:prod.id, 
                    ...prod.data()
                });

            }).finally(() => {
                setLoading(false)
            }) 

    }, [itemId])

    return loading ? (<h2 className='loading bg-white m-0 p-2 text-decoration-none text-center'>Cargando...</h2>) : (<><ItemDetail products={products} /></>)
}

export default ItemDetailContainer;