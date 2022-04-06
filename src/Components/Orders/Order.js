import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // console.log(cart);
    const handleRemoveProduct = product => {

        const rest = cart.filter(pd => pd.id !== product.id);
        // console.log(rest);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            {/* <h2>This Is Orders: {products.length}</h2> */}
            <h2>This Is Cart: {cart.length}</h2>
            <div className='d-flex row'>
                <div className='col-md-9 p-5 '>
                    {

                        cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                    }
                </div>
                <div className='col-md-3 cart-container '>
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div >

    );
};

export default Order;