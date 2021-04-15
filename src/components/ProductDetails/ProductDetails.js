import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = (props) => {
      let { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <div>
            <h1>Hello:  {productKey} details</h1>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetails;