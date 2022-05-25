import { AiOutlineDelete } from 'react-icons/ai';
import dataNotes from '../../data/dataNotes';
import { removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import  { Toaster } from 'react-hot-toast';

const CartItem = ({ cartItem }) => {
  const notes = dataNotes.find((note) => note.id === cartItem.noteId);
  const quantity = cartItem.quantity;
  const totalForItem = quantity * notes.price;
  const dispatch = useDispatch();

  return (
    <div className="cartItemDiv">
      <div className="itemsInCart">
        <img
          className="imgInCart"
          src={`${notes.img}.jpg`}
          alt="note in cart"
        />

        <p>{notes.name}</p>
        <p>{quantity} x {notes.price} руб.</p>
        <p> {totalForItem} руб.</p>

        <AiOutlineDelete
          className="removeIcon"
          onClick={() =>
            dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
          }
        />
         <div><Toaster 
          toastOptions={{
            
            error: {
              style: {
                background: 'white',
                padding: '20px'
              }
            },
          }}/></div>
      </div>
      
    </div>
  );
};
export default CartItem;
