import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../redux/cartSlice';

export const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          'http://localhost:8080/stripe/charge',
          {
            amount: totalPrice + '00',
            id: id,
          }
        );
        console.log('Stripe 35 | data', response.data.success);
        if (response.data.success) {
          console.log('CheckoutForm.js 25 | payment successful!');
          setMessageSuccess(true);
          dispatch(emptyCart())
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error);
      }
    } else {
      console.log(error.message);
    }
  };

 

  return (
    <div className='payment' >
      {!messageSuccess ? (
        <form onSubmit={handleSubmit} className="cardPayment">
          <CardElement />
          <button className='payBtn'>ОПЛАТИТЬ</button>
        </form>
      ) : (
        <div>
          <h5>Ваша оплата произведена успешно!</h5>
        </div>
      )}
    </div>
  );
};
