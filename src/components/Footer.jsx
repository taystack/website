import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "../components/Image";
import CommunityIcons from "../components/CommunityIcons";
import ProjectIcons from "../components/ProjectIcons";
import SocialIcons from "../components/SocialIcons";
import colors from "../constants/colors";
import ImageColors from "../helpers/ImageColors";
import emailImgSrc from "../assets/bio/email.svg";


const Footer = ({
  currentTab,
  breakColor,
}) => {
  const { img, img3, color, font } = useMemo(() => ImageColors.from(breakColor), [breakColor]);

  const year = new Date().getFullYear();

  const style = {
    position: "absolute",
    width: "100vw",
    minWidth: 1000,
    bottom: "3vh",
  };


  return (
    <>
    {/* <Layer breakColor={breakColor} isBottom> */}
    <Layer breakColor="orange" isBottom>
      <Card rightPad>
        <div>
          <h2 id="contact">Like what you see?</h2>
          <p>Follow this project and others on GitHub, or NPM.</p>
          <CommunityIcons
            background={color}
            color={font}
          />
        </div>
        <div>
          <Image src={emailImgSrc} />
        </div>
      </Card>
    </Layer>
    <div style={{ position: "relative", height: "3vh", background: colors.white }}>
      <Image src={img} style={style} />
      <Image className="floating" src={img3} style={style} />
      <Image className="floating-one80" src={img3} style={style} />
      <div style={{
        display: "flex",
        background: color,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <ProjectIcons />
        <span>© {year} Taylor Stackpole</span>
        <SocialIcons />
      </div>
    </div>
    </>
  )
};

Footer.defaultProps = {
  breakColor: "white",
};

export default connect(({
  currentTab,
}) => ({
  currentTab,
  breakColor: ImageColors.fromTab(currentTab),
}))(Footer);
