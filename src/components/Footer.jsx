import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "./Layer";
import Card from "./Card";
import ProjectCards from "./ProjectCards";
import Button from "./Button";
import Image from "./Image";
import CommunityIcons from "./CommunityIcons";
import SocialIcons from "./SocialIcons";
import LoadingOverlay from "./LoadingOverlay";
import BlogView from "./BlogView";
import colors from "../constants/colors";
import Taylor from "../JSConsole";
import ImageColors from "../helpers/ImageColors";
import coffee from "../assets/bio/coffee.svg";


const Footer = ({
  dispatch,
  currentTab,
  breakColor,
  loading,
}) => {
  const { img, img3, color, font } = useMemo(() => ImageColors.from(breakColor), [breakColor]);

  const style = {
    position: "absolute",
    width: "100vw",
    // minWidth: 1000,
    bottom: "3vh",
  };

  useEffect(() => {
    Taylor.setDispatch(dispatch);
  }, []);

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
            left
          />
        </div>

        <div>
          <Image src={coffee} alt="I drink coffee and like Zelda" />
        </div>
      </Card>

      <ProjectCards />
    </Layer>
    <div style={{ position: "relative", height: "3vh", background: colors.white }}>
      <Image src={img} style={style} />
      <Image className="floating" src={img3} style={{ opacity: 0.5, ...style }} />
      <Image className="floating-one80" src={img3} style={{ opacity: 0.5, ...style }} />
      <div style={{
        display: "flex",
        background: color,
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
        {/* <ProjectIcons /> */}
        <SocialIcons />
      </div>
    </div>
    {/* <LoadingOverlay /> */}
    <BlogView />
    </>
  )
};

Footer.defaultProps = {
  breakColor: "white",
};

export default connect(({
  currentTab,
  allImagesLoaded,
}) => ({
  currentTab,
  breakColor: ImageColors.fromTab(currentTab),
  loading: !allImagesLoaded,
}))(Footer);
