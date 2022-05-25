import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import  { Toaster } from 'react-hot-toast';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Note = ({note}) => {

const[quantity, setQuantity] = useState(1);
const dispatch = useDispatch();
const [showMore, setShowMore] = useState(false);

const handleShowMore = (item) => {
   item.showMore = !item.showMore
   setShowMore(!showMore)
 }

   return (
      <div className="shopDiv">
         
         <h4>{note.name}</h4>
         <img className="notesImg" src={`${note.img}.jpg`} alt="notebook"/>
           <h4>{note.price} Р</h4> 
         <div className="btns">
         
            <ChangeQuantity quantity={quantity} setQuantity = {setQuantity}/>

         <button className="addItemBtn" id = {note.id} onClick = {() => {dispatch(addItemToCart({note, quantity}))}}>ЗАКАЗАТЬ</button>
         <div><Toaster 
         toastOptions={{
            
            success: {
              style: {
                background: 'white',
                padding: '20px'
              }
            },
          }}
         /></div>
         </div>
         
         
         <p className="description">
            {showMore ? note.description : note.description.substring(0, 50) + "..."}

           <button className="showLessMore" onClick={() => handleShowMore(note)}>{showMore ? <HiArrowNarrowLeft/> : " подробнее"}</button>
           </p>

          {/* TO FIX LATER */}
          
      </div>
   )
}

export default Note;