import { createSlice } from '@reduxjs/toolkit';
export interface ThemeState {
  darkTheme: boolean | string;
}

const initialState: ThemeState = {
  darkTheme: JSON.parse(localStorage.getItem('darkTheme') || 'false') || false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;

      localStorage.setItem('darkTheme', JSON.stringify(state.darkTheme));
    }
  }
});

export const { toggleDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
