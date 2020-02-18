import PropTypes from "prop-types";


const hexFormatError = propName => (new Error(`${propName} expecting hex format: #ababab, #fff`))
export default (props, propName, ...rest) => {
  try {
    const value = props[propName].toString();
    if (value[0] !== "#") return hexFormatError(propName);
  } catch(e) {
    return hexFormatError(propName);
  }
  return PropTypes.string(props, propName, ...rest);
};
