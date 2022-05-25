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
<button className="quantityBtn" onClick = {removeQuantity}>-</button>
<span>{quantity}</span>
<button className="quantityBtn" onClick = {addQuantity}>+</button>

</div>
   )
}
export default ChangeQuantity;