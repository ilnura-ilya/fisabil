import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/notesSlice";
import { filterCategory } from "../../redux/notesSlice";


const Filter  = ({category}) => {

   const selectedCategory = useSelector(getSelectedCategory);
   const dispatch = useDispatch();

  
   return (
      <div className="filterBtn">
        
        <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryBtnSelect categoryBtn' : 'categoryBtn'}>   {category}</button> 
      </div>
   )
}

export default Filter;