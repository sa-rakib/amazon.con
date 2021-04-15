import {ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
const Product = (props) => {
    // data receive form fakeData//
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div className="featured-image">
                <img src={img} alt=""/>
            </div>
            <div className="heading-name">
                <h4> <Link to={'product/'+ key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button
                    onClick={ () => props.handleAddProduct(props.product)}
                    className="btn"> <ShoppingCart className=" " /> add to cart</button>
                
            </div>
        </div>
    );
};

export default Product;