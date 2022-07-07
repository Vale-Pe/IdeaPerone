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

    return loading ? (<h2>Cargando...</h2>) : (<><h3>{greetings}</h3> <ItemList items={items} /></>);
}

/* function ItemListContainer({greetings}) {
    
    const [items, setItems] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch('../data.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
        })
            .then((resp)=>resp.json())
            .then((data)=>setItems(data))
        }, 2000)    
    }, [])

    return (
        <section>
            <div className="lead bg-secondary py-4 d-flex row justify-content-evenly align-items-center h-100">
                <p className='bienvenidos text-uppercase mb-4'>{greetings}</p>
                <h2 className='fw-semibold text-uppercase mb-4'>Productos</h2>
                <ItemList items={items}/>
            </div>
        </section>  
    )
} */

export default ItemListContainer;