import colors from "../constants/colors";
import bubblesBlue from "../assets/bubbles/blue.svg";
import bubblesBlueBottom from "../assets/bubbles/blueBottom.svg";
import bubblesBlueLoose from "../assets/bubbles/blueLoose.svg";


import {
  SET_CURRENT_TAB,
  SET_PROJECT_ISSUES,
  SET_SCROLL_Y,
} from "./Actions";

export const initialState = {
  bubbleSrc: bubblesBlue,
  currentTab: "about", // shorthand name
  theme: colors.about,
  scrollY: 0,
  issues: [],
};

export default function Reducer(state = initialState, action) {
  let data = {};

  switch (action.type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.title,
        bubbleSrc: action.img,
        theme: action.color,
      };
      break;

    case SET_SCROLL_Y:
      return { ...state, scrollY: action.scrollY };
      break;

    case SET_PROJECT_ISSUES:
      return { ...state, issues: action.issues };
      break;

    default:
      return { ...state };
  };
};
