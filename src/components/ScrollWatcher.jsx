import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setScrollY } from "../redux/Actions";


export const ScrollWatcher = ({
  dispatch,
}) => {
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function handleScrollPosition(event) {
      dispatch(setScrollY(window.scrollY));
    }
    document.addEventListener("scroll", handleScrollPosition);

    return () => document.removeEventListener("scroll", handleScrollPosition);
  }, [lastY]);

  return null;
}

ScrollWatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ScrollWatcher);
