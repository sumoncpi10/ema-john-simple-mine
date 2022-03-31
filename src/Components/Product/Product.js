import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;

    const { handleAddToCart } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="card-text">Manufacturer: {seller}</p>
                    <p><small>Rating: {ratings}</small></p>
                </div>
                <div className="card-footer">
                    <button onClick={() => handleAddToCart(props.product)} className="w-100">Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;