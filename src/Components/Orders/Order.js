import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>This Is Orders: {products.length}</h2>
            <h2>This Is Cart: {cart.length}</h2>
        </div>
    );
};

export default Order;