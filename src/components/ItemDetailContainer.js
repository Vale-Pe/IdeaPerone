// import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from "react";

function ItemDetailContainer({greetings}) {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch('data.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
        })
            .then((resp)=>resp.json())
            .then((data)=>setProducts(data))
        }, 2000)    
    }, [])

    return (
        <section>
            <div className="lead bg-secondary py-4 d-flex row justify-content-evenly align-items-center h-100">
                <p className='text-uppercase mb-4'></p>
                <h2 className='fw-semibold text-uppercase mb-4'>{greetings}</h2>
                <ItemDetail products={products}/>
            </div>
        </section>  
    )
}

export default ItemDetailContainer;