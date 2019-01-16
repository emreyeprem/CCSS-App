import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import {store} from './store/configureStore'
import history from './history'

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');

};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description,props) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then((response)=>{
      store.dispatch({type: "UPDATESTATUS",value: 'sold'})
      store.dispatch({type: "UPDATECARTCOUNT",cartcount:0})
      let tree = store.getState()
      axios.post('http://localhost:3001/api/updatecartitems',{
        userid:tree.userid,
        status:tree.status
      }).then((response)=>{
        console.log(response)
        history.push('/mypurchases')
      })
      axios.post('http://localhost:3001/api/updatecartcount',{
          cartcount: tree.cartcount,
          userid: tree.userid,

      }).then((response)=>{
         console.log(response.data)
      })

    })
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout

    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout
