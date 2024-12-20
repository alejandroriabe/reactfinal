import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`/api/items/${itemId}`); // Cambia esto por tu API real
            const data = await response.json();
            setItem(data);
        };

        fetchItem();
    }, [itemId]);

    return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;