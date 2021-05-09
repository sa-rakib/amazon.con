import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import Count from '../Setcount/Count';
import './Header.css';
const Header = (props) => {
    const cart = props.cart;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav nav-flex">
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage</Link>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
                <div>
                    <Count cart={cart}></Count> 
            </div>
            </nav>
            
        </div>
    );
};

export default Header;