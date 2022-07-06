// import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from "react";

function ItemDetailContainer({greetings}) {
    
    const [products, setProducts] = useState([])
    
    console.log(products)

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
                <h2 className='fw-semibold text-uppercase mb-4'>{greetings}</h2>
                <ItemDetail products={products}
                    // title={`${products.title}`}
                    // description={`${products.description}`}
                    // price={`${products.price}`}
                />
            </div>
        </section>
    )
}

export default ItemDetailContainer;