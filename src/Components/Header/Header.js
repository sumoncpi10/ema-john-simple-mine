import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
                <CustomLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img className="bi me-2" width="100" height="42" role="img" aria-label="Bootstrap" src={logo} alt="" />
                </CustomLink>

                <ul className="nav nav-pills">
                    <li className="nav-item"><CustomLink to="/shop" className="nav-link " aria-current="page">Shop</CustomLink></li>
                    <li className="nav-item"><CustomLink to="/orders" className="nav-link">Orders</CustomLink></li>
                    <li className="nav-item"><CustomLink to="/inventory" className="nav-link">Inventory</CustomLink></li>
                    <li className="nav-item"><CustomLink to="/about" className="nav-link">About</CustomLink></li>
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