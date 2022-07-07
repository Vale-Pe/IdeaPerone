// import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from "react";
import { data } from '../data/data'
import { useParams } from 'react-router-dom'

function ItemDetailContainer({greetings}) {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    console.log(itemId)

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

    console.log(product)

    return loading ? (<h2>Cargando...</h2>) : (<><h3 className='text-align-center'>{greetings}</h3> <ItemDetail {...product} /></>)
}

/* function ItemDetailContainer({greetings}) {
    
    const [products, setProducts] = useState([])
    
    console.log(products)

    useEffect(()=>{
        setTimeout(() => {
            fetch('../data.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
            })
            .then((resp)=>resp.json())
            .then((data)=> { setProducts(data) })
            }, 2000)    
    }, [])

    console.log(products)

    return (
        <section>
            <div className="lead bg-secondary py-4 d-flex row justify-content-evenly align-items-center h-100">
                <h2 className='fw-semibold text-uppercase mb-4'>{greetings}</h2>
                //{<ItemDetail products={products}/> }
            </div>
        </section>
    )
} */

export default ItemDetailContainer;