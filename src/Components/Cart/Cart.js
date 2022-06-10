import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import { useAuth0 } from '@auth0/auth0-react';
import StripeContainer from '../../Stripe/StripeContainer';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <div>
      <div className="cartDiv">
        <h2>КОРЗИНА</h2>
         
            {cartItems.map((cartItem, id) => (
              <CartItem key={id} cartItem={cartItem} />
            ))}
            <h5>
              {totalPrice === 0
                ? 'ВАША КОРЗИНА ПУСТА'
                : `ИТОГОВАЯ СТОИМОСТЬ: ${totalPrice} РУБ.`}
            </h5>
            {totalPrice > 0 
            ?
          <StripeContainer totalPrice={totalPrice} /> :
          <span></span>}
  
    </div>
    </div>
    )
  );
};
export default Cart;
