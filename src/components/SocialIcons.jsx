import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import Classnames from "../helpers/Classnames";
import colors from "../constants/colors";
import githubSrc from "../assets/icons/github.svg";
import npmSrc from "../assets/icons/npm.svg";
import {
  githubProfile,
  npmProfile,
} from "../constants/contact";


const SocialIcons = ({
  noMobile,
  background,
}) => {
  return (
    <div className="SocialIcons" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background,
    }}>
      <div className="hoverAppear noMobile noTablett" style={{
        zIndex: 1,
        padding: 10,
      }}>
        <Image src={npmSrc} onClick={() => window.open(npmProfile, "_blank")} id="npm-link" style={{ height: 40 }} />
      </div>
      <div className="hoverAppear noMobile noTablett" style={{
        zIndex: 1,
        padding: 10,
      }}>
        <Image src={githubSrc} onClick={() => window.open(githubProfile, "_blank")} id="github-link" style={{ height: 40 }} />
      </div>
    </div>
  );
}

SocialIcons.propTypes = {
  background: "transparent",
};

export default SocialIcons;
