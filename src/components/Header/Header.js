import React from 'react';
import logo from '../../images/logo.png'
import Count from '../Setcount/Count';
import './Header.css';
const Header = (props) => {
    const cart = props.cart;
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav nav-flex">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage</a>
                <div>
                    <Count cart={cart}></Count> 
            </div>
            </nav>
            
        </div>
    );
};

export default Header;