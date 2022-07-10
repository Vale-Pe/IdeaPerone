// import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from "react";
import { data } from '../data/data'
import { useParams } from 'react-router-dom'

function ItemDetailContainer({greetings}) {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === itemId);

                resolve(myData);
            }, 2000);
        });

        getItems
            .then ((res) => {
                setProducts(res);
            })
            .finally(() => setLoading(false))
    }, [itemId]);

    return loading ? (<h2 className='loading bg-white m-0 p-2 text-decoration-none text-center'>Cargando...</h2>) : (<><ItemDetail {...product} greetings={greetings} /></>)
}

export default ItemDetailContainer;