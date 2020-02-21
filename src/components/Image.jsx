import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";
import useImageInView from "../hooks/useImageInView";


const Image = ({
  dispatch,
  src,
  alt,
  id,
  scrollY,
  style,
  test,
  onLoad,
  ...props
}) => {
  // const [ref, show, setLoaded] = useImageInView(scrollY, test);
  const [show, setLoaded] = useState(false);

  const styles = {
    ...style,
    opacity: show ? 1 : 0,
    transition: "opacity 200ms, top 200ms",
  };
  return (
    <img
      // ref={ref}
      onLoad={event => {
        setLoaded(true)
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
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  src: "http://placekitten.com/g/200/200",
  alt: "image loading not supported",
  id: "",
  style: {},
  onLoad: () => {},
};

export default connect(({ scrollY }) => ({
  scrollY,
}))(Image);
