import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const handleAddItem = () => {
        addItem(item);
        alert(`${item.name} ha sido agregado al carrito.`);
    };

    return <button onClick={handleAddItem}>Agregar al Carrito</button>;
};

export default AddItemButton;