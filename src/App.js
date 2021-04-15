import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {

      // cart data pass form there//
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log('card added', product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
  return (
    <div className='App'>
      <Header cart={cart}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop
              handleAddProduct={handleAddProduct} cart={cart} />
          </Route>
          <Route exact path="/shop">
            <Shop handleAddProduct={handleAddProduct} cart={cart} />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
