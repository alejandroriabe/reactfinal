import React from 'react';
import CartWidget from 'CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1>Mi E-commerce</h1>
            <CartWidget />
        </nav>
    );
};

export default Navbar;