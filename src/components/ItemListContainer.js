import './ItemListContainer.css';
import ItemList from './ItemList';
import React, { useEffect, useState } from "react";
import { data } from '../data/data'
import { useParams } from 'react-router-dom'

function ItemListContainer({greetings}) {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState([]);

    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const getItems = new Promise ((resolve) => {
            setTimeout(() => {

                const myData = catId ? data.filter((item) => item.category === catId) : data;
                resolve(myData);
            }, 1000)
        });

        getItems
            .then((res) => {
                setItems(res);
            })
            .finally(() => setLoading(false));
    }, [catId]);

    return loading ? (<h2 className='loading bg-white m-0 p-2 text-decoration-none text-center'>Cargando...</h2>) : (<><ItemList items={items} greetings={greetings}/></>);
}

export default ItemListContainer;