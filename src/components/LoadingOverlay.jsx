import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
import colors from "../constants/colors";
import Random from "../helpers/Random";
import coffee from "../assets/bio/coffee.svg";
import { useTypedText } from "../hooks/useTypedText";


const LoadingOverlay = ({ loading }) => {
  const [show, setShow] = useState(true);
  const [typedHeader, setTypeTo] = useTypedText(() => {
    setTypeTo2("7H3 50F7W4R3 3NGIN33R")
  }, show);

  // When done typing, unshow the overlay.
  const [typedHeader2, setTypeTo2] = useTypedText(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, show);

  // When show changes, override the scrollbar
  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "scroll";
  }, [show]);

  // When done loading...
  useEffect(() => {
    if (!loading) setTypeTo("Taylor Stackpole");
  }, [loading]);

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
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
        <h2 style={{ color: colors.white }}>{typedHeader}</h2>
        <h2 style={{ color: colors.white2 }}>{typedHeader2}</h2>
      </div>
      <Image src={coffee} />
    </div>
  )
};

LoadingOverlay.defaultProps = {
  loading: true,
};

export default connect(({ allImagesLoaded }) => ({
  loading: !allImagesLoaded,
}))(LoadingOverlay);
