import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";
import Classnames from "../helpers/Classnames";
import colors from "../constants/colors";
import Image from "./Image";
import bubbleSrc from "../assets/bubbles/black.svg";
import bubbleWhiteSrc from "../assets/bubbles/white.svg";
import Card from "./Card";


export function useLinearGradientAndSrc(isDark, custom = false) {
  const [gradient, setGradient] = useState([colors.white, colors.grey]);
  const [src, setSrc] = useState(bubbleWhiteSrc);
  const [color, setColor] = useState(colors.black);

  useEffect(() => {
    if (isDark) {
      setGradient([colors.black2, colors.black]);
      setSrc(bubbleSrc);
      setColor(colors.white);
    }
    if (custom) {
      const [colorFrom, colorTo, customBreakSrc] = custom;
      setGradient([colorFrom, colorTo]);
      setSrc(customBreakSrc);
    }
  }, [isDark, custom]);

  return [gradient, src, color];
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
}) => {
  const [gradient, src, color] = useLinearGradientAndSrc(dark, custom);
  const { minHeight } = useLayerDimensions(isBottom);
  const [isDone] = useTimeout(100);
  return (
    <div className="Layer" style={{
      background: `linear-gradient(${gradient.join()})`,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingBottom: "15vh",
      paddingTop: isTop ? "15vh" : 0,
      ...style,
      minHeight,
      color,
    }}>
      {!isTop && <Image src={src} style={{
        width: "100vw",
        position: "absolute",
        bottom: "100%",
        transition: "opacity 200ms ease-in",
        opacity: isDone ? 1 : 0,
      }} />}

      {children}
    </div>
  );
};

Layer.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool,
  isTop: PropTypes.bool,
  isBottom: PropTypes.bool,
}

Layer.defaultProps = {
  isBottom: false,
  isTop: false,
  dark: false,
};

export default Layer;
