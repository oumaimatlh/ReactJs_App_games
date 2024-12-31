import { configureStore } from '@reduxjs/toolkit';
import jeuReducer from './jeuSlice';

const store = configureStore({
  reducer: {
    jeu: jeuReducer,
  },
});

export default store;
