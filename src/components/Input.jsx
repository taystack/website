import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import colors from "../constants/colors";

const DEFAULT_BORDER_STYLES = {
  borderRadius: 0,
  border: "none",
  borderBottom: `2px solid ${colors.grey}`,
};

const DEFAULT_INPUT_STYLES = {
  fontSize: 20,
  color: colors.black,
  border: `1px solid ${colors.grey}`,
  outline: "none",
};

export const NakedInput = ({ style, ...props }) => (
  <input id={props.id} {...props}
    style={{ ...DEFAULT_INPUT_STYLES, ...style, }}
  />
);

NakedInput.propTypes = {
  id: PropTypes.string.isRequired,
};

function useBorderStyles(focused, hasError) {
  const [styles, setStyles] = useState({});
  useEffect(() => {
    let newStyles = { ...DEFAULT_BORDER_STYLES };
    if (focused) {
      newStyles = {
        ...newStyles,
        borderBottom: `2px solid ${hasError ? colors.red : colors.contact}`,
      };
    }
    setStyles(newStyles);
  }, [focused, hasError]);
  return styles;
}

const FormInput = ({
  id,
  label,
  style,
  required,
  error,
  value,
  ...props
}) => {
  const hasError = error.length > 0;
  const [focused, setFocused] = useState(value.length > 0);
  const [placeholder, setPlaceholder] = useState("");
  const borderStyles = useBorderStyles(focused, hasError);

  useEffect(() => {
    if (error.length > 0) {
      setFocused(true);
      setPlaceholder(error);
    }
  }, [error]);

  const handleBlur = event => {
    props.onBlur(event);
    if (error.length > 0) return;
    if (value.length === 0) setFocused(false);
  };

  const handleFocus = event => {
    setFocused(true);
    props.onFocus(event);
  };

  return (
    <div style={{ position: "relative", marginTop: "7vh", }}>
      <label style={{
        position: "absolute",
        top: focused ? -20 : 20,
        color: hasError ? colors.red : colors.grey,
        left: 7,
        zIndex: 1,
        cursor: "text",
        transition: "top 150ms ease-out, color 100ms ease-out",
      }} htmlFor={id}>{label}
        {(value.length > 0 && hasError) && <span> - {placeholder}</span>}
      </label>
      <input
        {...props}
        value={value}
        id={id}
        name={id}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        tabIndex={0}
        placeholder={error || props.placeholder}
        style={{
          ...DEFAULT_INPUT_STYLES,
          ...style,
          background: "transparent",
          color: colors.white,
          width: "100%",
          boxSizing: "border-box",
          paddingTop: 15,
          paddingBottom: 10,
          ...borderStyles,
        }}
      />
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  style: PropTypes.object,
  required: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormInput.defaultProps = {
  required: false,
  error: "",
  value: "",
  onChange: x => x,
  onBlur: x => x,
  onFocus: x => x,
  style: {
    borderRadius: 2,
    padding: "5px 7px",
    background: colors.white,
  },
};

export default FormInput;
