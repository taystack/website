import React, { useState } from "react";
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
  const [focused, setFocused] = useState(false);

  return (
    <div
      tabIndex={0}
      {...props}
      id={id}
      className={Classnames("Button", props.className)}
      onFocus={event => setFocused(true)}
      onBlur={event => setFocused(false)}
      onMouseLeave={event => setFocused(false)}
      onMouseEnter={event => setFocused(true)}
      onTouchCancel={event => setFocused(false)}
      onTouchEnd={event => setFocused(false)}
      onTouchStart={event => setFocused(true)}
      style={{
        borderRadius: 2,
        boxShadow: "0 3px 3px 1px rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 100ms",
        outline: "none",
        cursor: "default",
        background: focused ? "white" : background,
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
