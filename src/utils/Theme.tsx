export type ThemeType = typeof lightTheme;

export const darkTheme: ThemeType = {
  bg: '#181818',
  bgLighter: '#202020',
  text: '#fff',
  textSoft: '#aaa',
  soft: '#373737'
};

export const lightTheme = {
  bg: '#f9f9f9',
  bgLighter: '#fff',
  text: '#000',
  textSoft: '#787878',
  soft: '#f5f5f5'
};

export const theme = lightTheme;
