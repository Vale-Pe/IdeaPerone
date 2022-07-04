import React from 'react';

export const ItemDetail = ({
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
};

export default ItemDetail;