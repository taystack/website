import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useTransitionTimeout from "../hooks/useTransitionTimeout";
import useTriangleStyles from "../hooks/useTriangleStyles";
import colors from "../constants/colors";


const BackgroundTriangles = ({
  name,
  show,
}) => {
  const [done1, initTransition1, unload1] = useTransitionTimeout(100, show);
  const [done2, initTransition2, unload2] = useTransitionTimeout(200, show);
  const [done3, initTransition3, unload3] = useTransitionTimeout(200, show);
  const show1 = show && done1;
  const show2 = show && done2;
  const show3 = show && done3;
  const styles = useTriangleStyles(show1, colors[`${name}Dark`]);
  const styles2 = useTriangleStyles(show2, colors[`${name}Dark`], 1, { opacity: 0.1 });
  const styles3 = useTriangleStyles(show3, colors[`${name}Dark`], 4, { opacity: 0.1 });

  useEffect(() => {
    return () => {
      unload1();
      unload2();
      unload3();
    }
  }, []);
  useEffect(() => {
    if (show) {
      initTransition1();
      initTransition2();
      initTransition3();
    }
  }, [show]);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
    }}>
      <div style={styles3}></div>
      <div style={styles2}></div>
      <div style={styles}></div>
    </div>
  )
};

BackgroundTriangles.propTypes = {
  name: PropTypes.string,
  show: PropTypes.bool,
};

export default connect(({ currentTab }, { name }) => ({
  show: name === currentTab,
}))(BackgroundTriangles);
