import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {

const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);


   return (
      <div>
<div className="cartDiv">

<h2>КОРЗИНА</h2>

{cartItems.map((cartItem, id) => <CartItem key = {id} cartItem = {cartItem} />)}
<h5 >{totalPrice === 0 ? "ВАША КОРЗИНА ПУСТА" : `ИТОГОВАЯ СТОИМОСТЬ: ${totalPrice} РУБ.`} </h5>

</div>
</div>
   )
}
export default Cart;