import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import Classnames from "../helpers/Classnames";
import colors from "../constants/colors";
import github from "../assets/icons/github.svg";
import npm from "../assets/icons/npm.svg";
import stackoverflow from "../assets/icons/stackoverflow.svg";
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/email.svg";
import {
  githubProfile,
  npmProfile,
  stackoverflowProfile,
  linkedinProfile,
  emailLink
} from "../constants/contact";

export const IconWrapper = ({ children, className, style }) => (
  <div tabIndex={0} className={className} style={{
    zIndex: 1,
    padding: 10,
    outline: "none",
    ...style,
  }}>
    {children}
  </div>
);
IconWrapper.defaultProps = {
  style: {},
};
export const Github = ({ props, style }) => (<Image {...props} alt="Link to my github" src={github} onClick={() => window.open(githubProfile, "_blank")} id="github-link" className="SocialIcon" style={style} />);
export const StackOverflow = ({ props, style }) => (<Image {...props} alt="Link to my stackoverflow" src={stackoverflow} onClick={() => window.open(stackoverflowProfile, "_blank")} id="stackoverflow-link" className="SocialIcon" style={style} />);
export const LinkedIn = ({ props, style }) => (<Image {...props} alt="Link to my linkedin" src={linkedin} onClick={() => window.open(linkedinProfile, "_blank")} id="linkedin-link" className="SocialIcon" style={style} />);
export const Npm = ({ props, style }) => (<Image {...props} alt="Link to my npm" src={npm} onClick={() => window.open(npmProfile, "_blank")} id="npm-link" className="SocialIcon" style={style} />);
export const Email = ({ props, style }) => (<Image {...props} alt="Link to my email" src={email} onClick={() => window.open(emailLink, "_blank")} id="npm-link" className="SocialIcon" style={style} />);

const SocialIcons = ({
  noMobile,
  noTablett,
  background,
}) => {
  const className = Classnames("hoverAppear", { noMobile, noTablett });
  return (
    <div className="SocialIcons" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background,
    }}>
      <IconWrapper className={className}><Npm /></IconWrapper>
      <IconWrapper className={className}><Github /></IconWrapper>
      <IconWrapper className={className}><StackOverflow /></IconWrapper>
      <IconWrapper className={className}><LinkedIn /></IconWrapper>
      <IconWrapper className={className}><Email /></IconWrapper>
    </div>
  );
}

SocialIcons.defaultProps = {
  background: "transparent",
};

export default SocialIcons;
