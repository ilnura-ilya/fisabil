import dataNotes from "../../data/dataNotes";
import Note from "./Note";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/notesSlice";


const Notes = () => {
   const selectedCategory = useSelector(getSelectedCategory);

   return (
      <div className="notes">
         {dataNotes.filter(note => {
            if (selectedCategory === 'ВСE')
            return true;
            return selectedCategory === note.category
         })
         .map((note,id) => 
            <Note key={id} note = {note}/>)}
      </div>
   )
}

export default Notes;