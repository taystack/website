import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "./Image";
import colors from "../constants/colors";
import Random from "../helpers/Random";
import email from "../assets/icons/email.svg";


function useRandomBubbles() {
  return useMemo(() => Array(20).fill("").map((value, i) => ({
    x: `${Random(-3, 103)}vw`,
    y: `${Random(-3, 103)}vh`,
    id: i,
  })), []);
}


const LoadingOverlay = ({ loading }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "scroll";
  }, [show]);

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: loading || show ? 1000 : -1000,
    opacity: loading || show ? 1 : 0,
    transition: "opacity 500ms, z-index 200ms 550ms",
    background: colors.black,
  };

  const coords = useRandomBubbles(loading);
  const bubbles = coords.map(coord => (
    <div key={coord.id} className="LoadingBubble" style={{
      position: "absolute",
      left: coord.x,
      borderRadius: 50,
      height: 50,
      width: 50,
      boxShadow: "0 0 1px 1px rgba(0,0,0,0.4)",
      background: colors.green,
    }}>

    </div>
  ));

  return (
    <div className="LoadingOverlay" onClick={() => setShow(false)} style={style}>
      {bubbles}
      <Image src={email} />
    </div>
  )
};

LoadingOverlay.defaultProps = {
  loading: true,
};

export default connect(({ allImagesLoaded }) => ({
  // loading: true,
  loading: !allImagesLoaded,
}))(LoadingOverlay);
