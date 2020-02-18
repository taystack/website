import colors from "../constants/colors";
import bubblesBlue from "../assets/bubbles/blue.svg";
import bubblesOrange from "../assets/bubbles/orange.svg";
import bubblesPurple from "../assets/bubbles/purple.svg";
import bubblesRed from "../assets/bubbles/red.svg";
import bubblesGreen from "../assets/bubbles/green.svg";


export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SET_SCROLL_Y = "SET_SCROLL_Y";

export const getTabConstant = (key, getAllTabs = false) => {
  const allTabs = {
    about: {
      title: "about",
      desc: "This is what we show",
      path: "about",
      color: colors.about,
      img: bubblesBlue,
    },
    skills: {
      title: "skills",
      desc: "Some bowstaff skills",
      path: "skills",
      color: colors.skills,
      img: bubblesPurple,
    },
    contact: {
      title: "contact",
      desc: "Contact details",
      path: "contact",
      color: colors.contact,
      img: bubblesGreen,
    },
    error: {
      title: "error",
      desc: "The error page",
      color: colors.red,
      img: bubblesRed,
    },
  };
  if (getAllTabs) {
    return { ...allTabs };
  }
  if (allTabs[key]) return allTabs[key]
  return allTabs.error;
};

export const tabConstant = getTabConstant(false, true);


export const setCurrentTab = currentTab => {
  let tab = getTabConstant(currentTab);
  return {
    type: SET_CURRENT_TAB,
    ...tab,
    // bubbleSrc: tab.img,
    // theme: tab.color,
    // currentTab: tab.title,
  };
};

export const setScrollY = scrollY => ({
  type: SET_SCROLL_Y,
  scrollY,
});
