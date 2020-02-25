import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import Transition from "./Transition";
import { setShowBlogView } from "../redux/Actions";
import colors from "../constants/colors";


export const BlogView = ({
  dispatch,
  issues,
  show,
}) => {

  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "scroll";
  }, [show]);

  const titles = issues.map(issue => {
    return (
      <div key={issue.id} style={{ color: colors.white, padding: 10 }}>
        <ReactMarkdown style={{ boxSizing: "border-box", maxWidth: 800, margin: "0 auto", }} source={issue.body} />
      </div>
    );
  });

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: show ? "100vh" : 0,
      width: show ? "100vw" : 0,
      background: colors.black,
      overflowY: "scroll",
    }}>
      <Transition>
        {titles}
      </Transition>
    </div>
  );
};

BlogView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

BlogView.defaultProps = {
};

export default connect(({ issues, showBlogView }) => ({
  issues,
  show: showBlogView,
  /* Map state to props object:
  /* foo: state.foo */
}))(BlogView);
