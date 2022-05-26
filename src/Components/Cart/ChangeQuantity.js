import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const ChangeQuantity = ({quantity, setQuantity}) => {


   const addQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
   }

   const removeQuantity = () => {
      if(quantity <= 1)
      return;
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
   }
   return (
<div className="quantityChange">
  
      <span className="quantityBtn" onClick = {removeQuantity}><HiMinusSm/></span>
<span>{quantity}</span>
<span className="quantityBtn" onClick = {addQuantity}><HiPlusSm/></span>
  


</div>
   )
}
export default ChangeQuantity;