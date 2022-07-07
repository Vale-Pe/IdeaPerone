import './ItemListContainer.css';
import ItemList from './ItemList';
import React, { useEffect, useState } from "react";

function ItemListContainer({greetings}) {
    
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
}

export default ItemListContainer;