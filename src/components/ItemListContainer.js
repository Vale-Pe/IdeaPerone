import './ItemListContainer.css';
import ItemList from './ItemList';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where, } from 'firebase/firestore'
import Loader from './Loader';

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
    const params = useParams();

    let category = params.category;

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
            {loading ? (<Loader />) : (<><ItemList items={items}/></>)}
        </div>
    )
}

export default ItemListContainer;

