import React, { createContext, useEffect, useState } from 'react';
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
import { addToDatabaseCart, getDatabaseCart } from './utilities/databaseManager';
import fakeData from './fakeData';
import Login from './components/LoginIn/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {

      // cart data pass form there//
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map(existingKey => {
      const product = fakeData.find(pd => pd.key === existingKey);
      product.quantity = saveCart[existingKey];
      return product;
    })
    setCart(previousCart)
  }, [])


  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === product.key)
    let count = 1;
    let newCart;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = sameProduct.quantity + 1;
      const other = cart.filter(pd => pd.key === toBeAddedKey)
      newCart = [...other, sameProduct];
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product]
    }
      setCart(newCart)
      addToDatabaseCart(product.key, count);
      
  }
  
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Email: {loggedInUser.email}</h1>
      <Router>
        <Header cart={cart}/>
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
          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
