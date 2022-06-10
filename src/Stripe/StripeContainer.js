import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51L8WruLaOorlLi8wJOq1CqvRvDdVvQgu5peBnq641ULPTaZ7W8xjsoLnqr7wtoz9Tbb2DEP76gfxufeCS6mEwy9R00XzwPybuU";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({totalPrice}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm totalPrice = {totalPrice}/>
    </Elements>
  );
};

export default Stripe;