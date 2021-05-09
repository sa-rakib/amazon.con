 import React from 'react';
import Cart from '../Cart/Cart';
import './reviewItem.css';
const ReviewItem = (props) => {
    const cart = props.cart;
    const { img, name, seller, price, stock, key,quantity } = props.product;
     return (
         <div className="product">
            <div>
                 <div className="featured-image">
                <img src={img} alt=""/>
            </div>
            <div className="heading-name">
                <h4>{name}</h4>
                <p>by: {seller}</p>
                     <p>$ {price}</p>
                     <p>{quantity}</p>
                 <button className="btn" onClick={() => props.removeProduct(key)}>Remove</button>
            </div>
         </div>
        </div>
     );
 };
 
 export default ReviewItem;