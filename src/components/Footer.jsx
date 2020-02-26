import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "./Layer";
import Card from "./Card";
import ProjectCards from "./ProjectCards";
import Button from "./Button";
import Image from "./Image";
import CommunityIcons from "./CommunityIcons";
import SocialIcons, {
  Github,
  Npm,
  Email,
  StackOverflow,
  LinkedIn,
  Cv,
  IconWrapper,
} from "./SocialIcons";
import BlogView from "./BlogView";
import colors from "../constants/colors";
import Taylor from "../JSConsole";
import ImageColors from "../helpers/ImageColors";
import coffee from "../assets/bio/coffee.svg";


const FiftyFifty = ({ lhs, rhs, color }) => (
  <div style={{
    display: "flex",
    background: color,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  }}>
    <div style={{ marginRight: 10, flexBasis: "50%", display: "flex", justifyContent: "flex-end" }}>
      <IconWrapper className="hoverAppear">{lhs}</IconWrapper>
    </div>
    <div style={{ flexBasis: "50%" }} className="hoverAppear">{rhs}</div>
  </div>
);

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
      <div style={{ padding: 10, background: color }}>
        <FiftyFifty lhs={<Cv />} rhs="CV" />
        <FiftyFifty lhs={<Email />} rhs="Email" />
        <FiftyFifty lhs={<LinkedIn />} rhs="LinkedIn" />
        <FiftyFifty lhs={<Github />} rhs="GitHub" />
        <FiftyFifty lhs={<Npm />} rhs="Npm Registry" />
        <FiftyFifty lhs={<StackOverflow />} rhs="StackOverflow" />
      </div>
    </div>
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
