import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useTimeout from "@taystack/use-timeout";
import { useHistory, useLocation } from "react-router";

import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import Image from "./Image";
import ScrollWatcher from "./ScrollWatcher";
import SkillsTab from "./Skills/SkillsTab";
import githubSrc from "../assets/icons/github.svg";
import npmSrc from "../assets/icons/npm.svg";
import colors from "../constants/colors";
import SocialIcons from "../components/SocialIcons";
import {
  githubProfile,
  npmProfile,
} from "../constants/contact";
import {
  setCurrentTab,
  setScrollPosition,
} from "../redux/Actions";


export const Header = ({
  dispatch,
  currentTab,
  background,
  imgSrc,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [isDone] = useTimeout(200);

  const handleTabClick = tab => {
    const { path } = tab;
    if (!location.pathname.includes(path)) history.push(path);
  };

  const style = {
    display: "flex",
    transition: "opacity 300ms",
    position: "relative",
    top: 0,
    width: "100vw",
    zIndex: 1,
    justifyContent: "stretch",
    opacity: isDone ? 1 : 0,
  };

  const tabProps = {
    onClick: handleTabClick,
    show: true,
  };

  return (
    <>
    <div id="Header" style={style}>
      <ScrollWatcher />
      <div id="Tabs" style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 1,
        background,
      }}>
        <Image src={imgSrc} style={{
          position: "absolute",
          transform: "rotate(180deg)",
          width: "100vw",
          fill: "green",
          top: 50,
        }} />
        <SkillsTab {...tabProps} />
        <AboutTab {...tabProps} />
        <ContactTab {...tabProps} />
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

export default connect(({ currentTab, bubbleSrc, theme }) => ({
  currentTab,
  background: theme,
  imgSrc: bubbleSrc,
}))(Header);
