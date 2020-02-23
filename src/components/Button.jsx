import React from "react";
import PropTypes from "prop-types";
import colors, { darken } from "../constants/colors";
import Classnames from "../helpers/Classnames";


const Button = ({
  background,
  color,
  children,
  style,
  id,
  ...props
}) => {
  return (
    <div
      tabIndex={0}
      {...props}
      id={id}
      className={Classnames("Button hoverAppear moreOpacity", props.className)}
      style={{
        borderRadius: 2,
        boxShadow: "0 1px 1px rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 100ms",
        outline: "none",
        background: background,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Button.defaultProps = {
  background: colors.white,
  color: colors.black,
  style: {},
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
