import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './productdetails.css';
const ProductDetails = (props) => {
      let { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <div className="container">
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;