import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }

            console.log(addedProducts);
        }
        setCart(savedCart);
        // console.log(storedCart);
    }, [products]);
    // console.log(products);
    const handleAddToCart = (SelectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if (!exists) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // newCart = [...cart, SelectedProduct];
        setCart(newCart);
        addToDb(SelectedProduct.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;