import { createSlice } from '@reduxjs/toolkit';
import i from './R';

const initialState = {
  face: 0,
  nombre_essaie: 0,
  image: i.imgvide,
  action: 'Jouer',
  bravo: '',
};

const jeuSlice = createSlice({
  name: 'jeu',
  initialState,
  reducers: {
    initialiser: (state) => {
      state.face = 0;
      state.nombre_essaie = 0;
      state.image = i.imgvide;
      state.action = 'Jouer';
      state.bravo = '';
    },
    change: (state) => {
      state.nombre_essaie += 1;
      const min = 1;
      const max = 6;
      const r = Math.floor(Math.random() * (max - min + 1)) + min;
      state.face = r;
      state.image = i[`img${r}`];

      if (r === 6) {
        state.action = 'Initialiser';
        state.bravo = 'Bravo; vous avez trouvé la face cachée !!!...';
      }
    },
  },
});

export const { initialiser, change } = jeuSlice.actions;
export default jeuSlice.reducer;
