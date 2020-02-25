import colors from "../constants/colors";
import bubblesGreen from "../assets/bubbles/green.svg";
import bubblesGreenBottom from "../assets/bubbles/greenBottom.svg";
import bubblesGreenLoose from "../assets/bubbles/greenLoose.svg";


import {
  SET_CURRENT_TAB,
  SET_PROJECT_ISSUES,
  SET_SCROLL_Y,
  SET_QUEUED_IMAGES,
  SET_ALL_IMAGES_LOADED,
  SET_ISSUES,
  SET_SHOW_BLOG_VIEW,
} from "./Actions";

export const initialState = {
  bubbleSrc: bubblesGreen,
  currentTab: "about", // shorthand name
  theme: colors.about,
  scrollY: 0,
  issues: [],
  queuedImages: {},
  allImagesLoaded: false,
  issues: [],
  showBlogView: false,
};

export default function Reducer(state = initialState, action) {
  let data = {};

  switch (action.type) {
    case SET_ALL_IMAGES_LOADED:
      return { ...state, allImagesLoaded: action.done };
      break;

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

    case SET_QUEUED_IMAGES:
      return { ...state, queuedImages: action.queuedImages };
      break;

    case SET_ISSUES:
      return { ...state, issues: action.issues };
      break;

    case SET_SHOW_BLOG_VIEW:
      return { ...state, showBlogView: action.show };
      break;

    default:
      return { ...state };
  };
};
