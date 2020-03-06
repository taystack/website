import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";
import colors from "../constants/colors";
import Image from "./Image";
import bubbleSrc from "../assets/bubbles/black.svg";
import bubbleWhiteSrc from "../assets/bubbles/white.svg";
import bubbleWhiteBottomSrc from "../assets/bubbles/whiteBottom.svg";
import Card from "./Card";
import ImageColors from "../helpers/ImageColors";
import { useClassnames } from "../hooks/useClassnames";


export function useBreakSources(color = "white") {
  const [src, setSrc] = useState("");
  const [src2, setSrc2] = useState("");
  const [src3, setSrc3] = useState("");

  useEffect(() => {
    const { img, img2, img3 } = ImageColors.from(color);
    setSrc(img);
    setSrc2(img2);
    setSrc3(img3);
  }, [color]);

  return [src, src2, src3];
}


function useLayerDimensions(isBottom) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      minHeight: `${isBottom ? 75 : 100}vh`,
    });
  }, [isBottom]);

  return style;
}

const Layer = ({
  children,
  dark,
  custom,
  isTop,
  isBottom,
  style,
  breakColor,
  ...props
}) => {
  const [src, src2, src3] = useBreakSources(breakColor);
  const { minHeight } = useLayerDimensions(isBottom);
  const [isDone] = useTimeout(100);
  const imageStyle = {
    width: "100vw",
    // minWidth: 1000,
    position: "absolute",
    transition: "opacity 200ms ease-in",
    opacity: isDone ? 1 : 0,
  };
  const floatingImageStyle = {};
  if (isTop) {
    floatingImageStyle.top = "10vh";
  } else {
    floatingImageStyle.bottom = "100%";
  }
  const cx = useClassnames("Layer", props.className);
  return (
    <div className="Layer" {...props} style={{
      background: `linear-gradient(${[colors.black2, colors.black].join()})`,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingBottom: "30vh",
      paddingTop: "15vh",
      ...style,
      minHeight,
      color: colors.white,
    }}>
      {!isTop && <Image src={src} style={{
        ...imageStyle,
        bottom: "100%",
      }} />}
      {!isTop && <Image src={src2} style={{
        ...imageStyle,
        top: 0,
      }} />}
      <Image className="floating" src={src3} style={{
        ...imageStyle,
        ...floatingImageStyle,
        opacity: 0.7,
      }} />
      <Image className="floating-one80" src={src3} style={{
        ...imageStyle,
        ...floatingImageStyle,
        opacity: 0.7,
      }} />

      {children}
    </div>
  );
};

Layer.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool,
  isTop: PropTypes.bool,
  isBottom: PropTypes.bool,
  breakColor: PropTypes.string,
}

Layer.defaultProps = {
  isBottom: false,
  isTop: false,
  dark: false,
  breakColor: "white",
};

export default Layer;
