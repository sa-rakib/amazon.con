import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false)
    const removeProduct = (productKey) => {
        // console.log('click me', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProduct)
    }, [])

    const history = useHistory()
    const handlePlaceOrder = () => {
        history.push('/shipment');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-mg">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="btn">Place order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;