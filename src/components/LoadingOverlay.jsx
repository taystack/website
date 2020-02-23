import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
import colors from "../constants/colors";
import Random from "../helpers/Random";
import coffee from "../assets/bio/coffee.svg";
import { useTypedText } from "../hooks/useTypedText";


const LoadingOverlay = ({ loading, queuedImages }) => {
  const [show, setShow] = useState(true);
  const [typedHeader, setTypeTo] = useTypedText(() => {
    setTypeTo2("7H3 50F7W4R3 3NGIN33R")
  }, show);

  // When done typing, unshow the overlay.
  const [typedHeader2, setTypeTo2, rawValue2, setTarget2] = useTypedText(() => {
    if (loading) {
      setTarget2("Thinks you should turn off JavaScript");
    } else {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, show);

  const currentlyLoadingImage = useMemo(() => {
    return Object.keys(queuedImages).filter(k => !queuedImages[k])[0];
  }, [queuedImages]);

  // When show changes, override the scrollbar
  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "scroll";
  }, [show]);

  // When we mount...
  useEffect(() => {
    setTypeTo("Taylor Stackpole");
  }, []);

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    fontFamily: "monospace",
    zIndex: show ? 1000 : -1000,
    opacity: show ? 1 : 0,
    transition: "opacity 1000ms, z-index 200ms 1050ms",
    background: colors.black,
  };

  return (
    <div className="LoadingOverlay" onClick={() => setShow(false)} style={style}>
      <div style={{

      }}>
        <span style={{ fontSize: "0.5em",  }}>{currentlyLoadingImage}</span>
        <h2 style={{ color: colors.white }}>{typedHeader}</h2>
        <h2 style={{ color: colors.white2 }}>{typedHeader2}</h2>
      </div>
    </div>
  )
};

LoadingOverlay.defaultProps = {
  loading: true,
  queuedImages: {},
};

export default connect(({ allImagesLoaded, queuedImages }) => ({
  loading: !allImagesLoaded,
  queuedImages,
}))(LoadingOverlay);
