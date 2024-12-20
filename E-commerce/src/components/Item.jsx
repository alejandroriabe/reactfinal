import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <ItemDetailContainer itemId={item.id} />
        </div>
    );
};

export default Item;