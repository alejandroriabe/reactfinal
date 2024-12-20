import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simulando una llamada a una API
        const fetchItems = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products'); // Cambia esto por tu API real
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return <ItemList items={items} />;
};

export default ItemListContainer;