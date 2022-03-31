import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img className="bi me-2" width="100" height="42" role="img" aria-label="Bootstrap" src={logo} alt="" />
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/shop" className="nav-link active" aria-current="page">Shop</a></li>
                    <li className="nav-item"><a href="/orders" className="nav-link">Orders</a></li>
                    <li className="nav-item"><a href="/inventory" className="nav-link">Inventory</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>

        </div >

    );
};

export default Header;