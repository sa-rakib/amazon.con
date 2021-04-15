import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
const Shop = (props) => {
    //data fetch form fakeData form internal file//
    const first10 = fakeData.slice(0, 10);
    // receiving data pass state //
    const [product, setProduct] = useState(first10)
    const cart = props.cart;
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product product={pd} handleAddProduct={props.handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-mg">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;