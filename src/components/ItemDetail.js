import React from 'react';

function ItemDetail({products}) {
    console.log(products)

    const producto = products[0]

    console.log(producto)

    return (
        <div className="detail-row">
        <img src="" alt="Imagen del producto" className="flex-col" />
        <section className="flex-col">
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <h2>{producto.price}</h2>
        </section>
    </div>
    );
}

/* export const ItemDetail = ({
    id,
    title,
    category,
    description,
    price,
    pictureUrl,
    discount,
}) => {
    return (
        <div className="detail-row">
            <img src="" alt={`${id}-${title}`} className="flex-col" />
            <section className="flex-col">
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
            </section>
        </div>
    );
}; */

export default ItemDetail;