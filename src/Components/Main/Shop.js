import AllCategories from "../AllCategories.js/AllCategories";
import Notes from "../NotesComponents/Notes";
import {  IoIosArrowUp} from 'react-icons/io';


function Shop ({showTopBtn, goToTop }) {
   return (
      <div className="shop">
         <AllCategories/>
         <Notes/>
         <div className='arrowUp'  style={{display: showTopBtn ? 'inline' : 'none'}}  onClick={goToTop}><IoIosArrowUp className='iconArrowUp'/></div>
      </div>
   )
}

export default Shop;