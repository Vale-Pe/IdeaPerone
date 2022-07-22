import './ItemListContainer.css';
import ItemList from './ItemList';
import React, { useEffect, useState } from "react";
import { data } from '../data/data'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer({greetings}) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const params = useParams();
    let category = params.category;

/*    useEffect(() => {
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
    }, [catId]); */

    const db = getFirestore();

    useEffect(() => {
        setLoading(true);



        if(category === undefined){     

            const q = collection( db, "libros")
            getDocs(q).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => (doc.data())))
            })
            .finally(() => setLoading(false));
        } else{
            const q = query(collection( db, "libros"), where ( "category", "==", category) )
            getDocs(q).then((snapshot) => {
                setItems(snapshot.docs.map((doc) => (doc.data())))
            })
            .finally(() => setLoading(false));
        }
    }, [category])
    
    return (
        <div>
            {loading ? (<h2 className='loading bg-white m-0 p-2 text-decoration-none text-center'>Cargando...</h2>) : (<><ItemList items={items} /* productos={items} *//></>)}
            {/* {console.log(librosRef)} */}
        </div>
    )
}

export default ItemListContainer;

