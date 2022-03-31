import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='d-flex row '>
            {/* Products */}
            <div className='col-md-10 p-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            {/* Cart */}
            <div className='col-md-2 cart-container'>
                <h1>Cart</h1>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;