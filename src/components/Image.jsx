import React from "react";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";


const Image = ({
  src,
  alt,
  id,
  style,
  ...props
}) => {
  const [isDone] = useTimeout(100);
  const styles = {
    ...style,
    opacity: isDone ? style.opacity ? style.opacity : 1 : 0,
    transition: "opacity 200ms, top 200ms",
  };
  return (
    <img
      src={src}
      id={id}
      alt={alt}
      {...props}
      style={styles}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

Image.defaultProps = {
  src: "http://placekitten.com/g/200/200",
  alt: "cat",
  id: "image",
  style: {},
};

export default Image;
