import { createSlice } from '@reduxjs/toolkit'


export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    selectedCategory: 'ЕЖЕДНЕВНИК'
  },
  reducers: {
    filterCategory: (state, action) => {state.selectedCategory = action.payload}
 }
})

export const getSelectedCategory = state => state.notes.selectedCategory;

export const { filterCategory } = notesSlice.actions

export default notesSlice.reducer