import React from 'react';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import CartWidget from './components/CartWidget';
import './App.css'


const App = () => {
 
 
  return (
      <CartProvider>
          <Navbar />
          <Catalogo />
      </CartProvider>
  );
};

export default App;
