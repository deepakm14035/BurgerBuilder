import React from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/checkout';
import {BrowserRouter, Route } from 'react-router-dom';
import orders from './containers/orders/orders';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Layout></Layout>
      {/* <BurgerBuilder/>
      <Checkout></Checkout> */}
      <Route path="/" exact component={BurgerBuilder}></Route>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path="/orders" component={orders}></Route>
    </div>
    </BrowserRouter>
  );
}
//componentDidMount - called at the end
//componentWillmount - called before mounting component

export default App;
