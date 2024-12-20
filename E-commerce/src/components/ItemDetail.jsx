import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import Description from './Description';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <Description description={item.description} />
            <p>Precio: ${item.price}</p>
            <ItemQuantitySelector />
            <AddItemButton item={item} />
        </div>
    );
};

export default ItemDetail;