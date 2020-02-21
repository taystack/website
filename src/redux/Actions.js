import ImageColors from "../helpers/ImageColors";
import HashHas from "../helpers/HashHas";


export const SET_ALL_IMAGES_LOADED = "SET_ALL_IMAGES_LOADED";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SET_PROJECT_ISSUES = "SET_PROJECT_ISSUES";
export const SET_QUEUED_IMAGES = "SET_QUEUED_IMAGES";
export const SET_SCROLL_Y = "SET_SCROLL_Y";


export const getTabConstant = (key, getAllTabs = false) => {
  const allTabs = {
    about: {
      title: "about",
      desc: "This is what we show",
      path: "about",
      ...ImageColors.from("green"),
    },
    skills: {
      title: "skills",
      desc: "Some bowstaff skills",
      path: "skills",
      ...ImageColors.from("purple"),
    },
    contact: {
      title: "contact",
      desc: "Contact details",
      path: "contact",
      ...ImageColors.from("blue"),
    },
    error: {
      title: "error",
      desc: "The error page",
      ...ImageColors.from("red"),
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
  };
};

export const setScrollY = scrollY => ({
  type: SET_SCROLL_Y,
  scrollY,
});

export const setProjectIssues = issues => ({
  type: SET_PROJECT_ISSUES,
  issues,
});

export const setQueuedImages = (queuedImages, isDone) => ({
  type: SET_QUEUED_IMAGES,
  queuedImages,
  isDone,
});

export const setAllImagesLoaded = done => ({
  type: SET_ALL_IMAGES_LOADED,
  done,
});

export const dequeueImage = src => {
  return (dispatch, getState) => {
    const queuedImages = { ...getState().queuedImages };
    queuedImages[src] = true;
    const all = Object.values(queuedImages);
    const count = all.length;
    const isDone = all.reduce((l, r) => (l && r));
    dispatch(setQueuedImages(queuedImages, isDone));
    if (isDone) dispatch(setAllImagesLoaded(true));
  }
};

export const queueImage = src => {
  return (dispatch, getState) => {
    const queuedImages = { ...getState().queuedImages };
    if (HashHas(queuedImages, src)) return;
    queuedImages[src] = false;
    dispatch(setQueuedImages(queuedImages));
  };
};

export const getGithubProjectIssues = () => {
  return async dispatch => {
    try {
      const issues = await getGithubProjectIssues("taystack", "website");
      dispatch(setProjectIssues(issues));
    } catch(e) {
      console.log("Might need to log into Github for this.");
    }
  };
};
