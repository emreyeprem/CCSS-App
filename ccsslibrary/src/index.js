import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import history from './history'
import {Router, Switch, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Filter from './components/Filter'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import BaseLayout from './components/BaseLayout'
import Login from './components/Login'
import Register from './components/Register'
import Standards from './components/Standards'
import ListProduct from './components/ListProduct'
import SellerRegistration from './components/SellerRegistration'
import Aboutus from './components/Aboutus'
import ProductWholeInfo from './components/ProductWholeInfo'
import MyProducts from './components/MyProducts'
import Viewcart from './components/Viewcart'
import {persistor, store} from './store/configureStore'
import Standardworksheet from './components/Standardworksheet'
import MyPurchases from './components/MyPurchases'
import LeaveReview from './components/LeaveReview'
import Search from './components/Search'
import Help from './components/Help'
ReactDOM.render(<Provider store = {store}>
  <PersistGate loading={null} persistor={persistor}>
  <Router history={history}>

  <BaseLayout >

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/standards" component={Standards} />
      <Route path="/listproduct" component={ListProduct} />
      <Route path="/sellerregistration" component={SellerRegistration} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/productwholeinfo" component={ProductWholeInfo} />
      <Route path="/myproducts" component={MyProducts} />
      <Route path="/mypurchases" component={MyPurchases} />
      <Route path="/viewcart" component={Viewcart} />
      <Route path="/standardworksheet" component={Standardworksheet} />
      <Route path="/leavereview" component={LeaveReview} />
        <Route path="/search" component={Search} />
        <Route path="/help" component={Help} />
    </Switch>

  </BaseLayout>

  </Router>
</PersistGate>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
