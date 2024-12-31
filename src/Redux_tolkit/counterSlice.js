import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; 
const counterSlice = createSlice({
  name: 'counter', 
  initialState: { value: 0 }, 
  reducers: {
    increment: (state) => {
      state.value += 1; 
    },
    decrement: (state) => {
      state.value -= 1;
    },
   
  },
});

// Exporter les actions générées automatiquement
export const { increment, decrement} = counterSlice.actions;

// Exporter le reducer
export default counterSlice.reducer;


const store = configureStore({
  reducer: {
    counter: counterReducer, // Ajouter le slice au store
  },
});

export {store} ;


