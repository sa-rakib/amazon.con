import React from 'react';
import './cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price,0)

    let shipping = 12.99;
    if (total > 35 || total === 0) {
        shipping = 0
    }
    else if (total > 15){
        shipping = 4.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return ( 
        <div>
            <h1>Order Summary</h1>
            <p className="color">Items Ordered: {cart.length}</p>
            <h5>Product Price: {total.toFixed(2)}</h5>
            <p>Vat + Tax {tax}</p>
            <p>Shipping Cost {shipping}</p>
            <p>Total Price: {grandTotal}</p>
            <button className="btn">Order Now</button>
        </div>
    );
};

export default Cart;