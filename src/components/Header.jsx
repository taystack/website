import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useTimeout from "@taystack/use-timeout";
import { useHistory, useLocation } from "react-router";
import AboutTab from "./AboutTab";
import Image from "./Image";
import Classnames from "../helpers/Classnames";
import InstagramImage from "./InstagramImage";
// import ScrollWatcher from "./ScrollWatcher";
import githubSrc from "../assets/icons/github.svg";
import npmSrc from "../assets/icons/npm.svg";
import SocialIcons from "../components/SocialIcons";
import colors from "../constants/colors";
import {
  githubProfile,
  npmProfile,
} from "../constants/contact";
import {
  setCurrentTab,
  setScrollPosition,
  setShowBlogView,
} from "../redux/Actions";


export const Header = ({
  dispatch,
  currentTab,
  background,
  imgSrc,
  allLoaded,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  const handleTabClick = tab => {
    const { path } = tab;
    history.push("/");
    dispatch(setShowBlogView(false));
    // if (!location.pathname.includes(path)) history.push(path);
  };

  const style = {
    display: "flex",
    transition: "opacity 300ms",
    position: "relative",
    top: 0,
    width: "100vw",
    justifyContent: "stretch",
  };

  const tabProps = {
    onClick: handleTabClick,
    show: true,
    tabIndex: 0,
  };

  return (
    <>
    <div id="Header" style={style}>
      {/* <ScrollWatcher /> */}
      <div id="Tabs" style={{
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 1,
        transition: "opacity 300ms",
        background: allLoaded ? background : "transparent",
      }}>
        <Image onLoad={() => setLoaded(true)} id="header-image" className={Classnames({ loaded })} src={imgSrc} style={{
          position: "absolute",
          transform: "rotate(180deg)",
          width: "100vw",
          top: loaded ? 30 : 0,
          // minWidth: 1000,
        }} />
        {/* <InstagramImage className="SocialIcon" onClick={() => handleTabClick({ path: "/" })} /> */}
        <SocialIcons />
      </div>
    </div>
    </>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default connect(({ currentTab, bubbleSrc, theme, allImagesLoaded }) => ({
  currentTab,
  background: theme,
  imgSrc: bubbleSrc,
  allLoaded: allImagesLoaded,
}))(Header);
