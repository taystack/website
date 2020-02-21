export const purple = "#9642f5";
export const orange = "#db7923";
export const blue = "#4982e8";
export const green = "#6acb5d";
export const red = "#ff4136"; // #ee6262
export const purpleDark = "#7a10f3";
export const orangeDark = "#af5514";
export const blueDark = "#2357b7";
export const greenDark = "#63AB62";

export const black = "#2d2d2d";
export const black2 = "#171717";
export const grey = "#9a9a9a";
export const white = "#dedede";
export const white2 = "#aaa";

const colors = {
  backgroundDark: black,
  backgroundLight: blue,
  fontDark: black,
  fontLight: white,

  about: green,
  skills: purple,
  contact: green,
  error: red,
  aboutDark: orangeDark,
  skillsDark: blueDark,
  contactDark: purpleDark,

  red,
  black,
  black2,
  white,
  white2,
  grey,
  green,
  blue,
  orange,
  purple,
  purpleDark,
  [`${white}Dark`]: grey,
  [`${orange}Dark`]: orangeDark,
  [`${blue}Dark`]: blueDark,
  [`${purple}Dark`]: purpleDark,
  [`${green}Dark`]: greenDark,
};

export const darken = color => (colors[`${color}Dark`]);

export default colors;
