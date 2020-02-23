import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "../components/Layer";
import Card from "../components/Card";
import ProjectCards from "../components/ProjectCards";
import Button from "../components/Button";
import Image from "../components/Image";
import CommunityIcons from "../components/CommunityIcons";
import SocialIcons from "../components/SocialIcons";
import LoadingOverlay from "../components/LoadingOverlay";
import colors from "../constants/colors";
import ImageColors from "../helpers/ImageColors";
import coffee from "../assets/bio/coffee.svg";


const Footer = ({
  currentTab,
  breakColor,
  loading,
}) => {
  const { img, img3, color, font } = useMemo(() => ImageColors.from(breakColor), [breakColor]);

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
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* <ProjectIcons /> */}
        <SocialIcons />
      </div>
    </div>
    {/* <LoadingOverlay /> */}
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
