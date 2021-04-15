import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import './count.css';
const Count = (props) => {
    const cart = props.cart;
    return (
        <div className="count-number">
            <p className="count-number">{cart.length} <ShoppingCart className="add-cart"></ShoppingCart></p>
            
        </div>
    );
};

export default Count;