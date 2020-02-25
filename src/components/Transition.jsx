import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useTimeout from "@taystack/use-timeout";
import Classnames from "../helpers/Classnames";
import useTransitionTimeout from "../hooks/useTransitionTimeout";
import useTransitionStyles from "../hooks/useTransitionStyles";


export const Transition = ({
  dispatch,
  className,
  children,
  currentTab,
  id,
  transition,
  ...otherProps
}) => {
  const [done, initTransition, unload] = useTimeout(100, currentTab);
  const style = useTransitionStyles(transition, done, otherProps.style);

  // useEffect(() => {
    // initTransition();
    // return () => unload();
  // }, []);

  const cls = Classnames(["Transition", className, transition], { done });

  return (
    <div id={id} className={cls} {...otherProps} style={style}>
      {children}
    </div>
  );
}

Transition.propTypes = {
  children: PropTypes.any.isRequired,
  transition: PropTypes.oneOf(["fade", "fade-slide"]),
  id: PropTypes.string,
};

export default connect(({ currentTab }) => ({
  currentTab,
}))(Transition);
