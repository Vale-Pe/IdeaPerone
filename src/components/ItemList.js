import './ItemList.css';
import { useEffect, useState } from "react";
import Item from "./Item";

function ItemList(){
    
    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout( //emula retraso de 2seg hasta cargar los elementos
            () => {
                fetch('data.json', {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }
                })
                    .then((resp) => resp.json())
                    .then((data) => setInfo(data))
            }, 2000)

    }, []);

    return( 
        <div className='catalogo d-flex justify-content-center p-4'>
            {info.map(i => <Item product={i.title} price={i.price} description={i.description} key={i.id} />)} 
        </div>
    )
}

export default ItemList;