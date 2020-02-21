import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import useInstagramUserImage from "../hooks/useInstagramUserImage";


const InstagramImage = ({
  username,
  onClick,
  ...props
}) => {
  const [loading, source] = useInstagramUserImage();

  return (
    <div className="hoverAppear moreOpacity" style={{
      zIndex: 1,
      position: "relative",
      marginLeft: 10,
    }} onClick={onClick}>
      <Image src={source} {...props} style={{ borderRadius: 40, padding: 10, }} />
    </div>
  );
};

InstagramImage.propTypes = {
  username: PropTypes.string,
  onClick: PropTypes.func,
};

InstagramImage.defaultProps = {
  username: "stac_attak",
  onClick: () => {},
};

export default InstagramImage;
