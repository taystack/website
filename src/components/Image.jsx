import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";
// import useImageInView from "../hooks/useImageInView";
import useImageQueue from "../hooks/useImageQueue";
import Classnames from "../helpers/Classnames";


const Image = ({
  dispatch,
  src,
  alt,
  id,
  scrollY,
  style,
  test,
  loaded,
  onLoad,
  className,
  ...props
}) => {
  // Use the reducer here. Wait for all images to load properly
  const [hasLoaded, setLoaded] = useImageQueue(dispatch, src);

  const cx = Classnames(className, { hasLoaded });

  let transform = style.transform || false;
  const styles = {
    ...style,
    opacity: loaded ? 1 : 0,
    transition: "opacity 200ms, top 200ms",
  };
  return (
    <img
      className={cx}
      // ref={ref}
      onLoad={event => {
        setLoaded(true);
        onLoad(event);
      }}
      {...props}
      src={src}
      id={id}
      alt={alt}
      style={styles}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  alt: "image loading not supported",
  id: "",
  style: {},
  onLoad: () => {},
};

export default connect(({ scrollY, allImagesLoaded }) => ({
  scrollY,
  loaded: allImagesLoaded,
}))(Image);
