import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PropTypeHexFormat from "../helpers/PropTypeHexFormat";
import Classnames from "../helpers/Classnames";
import colors from "../constants/colors";


const TabItem = ({
  dispatch,
  onClick,
  tab,
  currentTab,
  show,
  ...otherProps
}) => {
  const { title } = tab;
  const isActive = title === currentTab;

  const handleClick = event => {
    event.stopPropagation();
    onClick(tab);
  };

  const className = Classnames("TabItem hoverAppear", { active: isActive });
  return (
    <div
      {...otherProps}
      className={className}
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
        height: 60,
        position: "relative",
        fontFamily: "monospace",
        fontWeight: "bold",
        outline: "none",
        color: colors.black,
      }}
    >
      <div>{title}</div>
    </div>
  );
};


TabItem.propTypes = {
  onClick: PropTypes.func,
  tab: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypeHexFormat,
  }),
  currentTab: PropTypes.string,
};


export default connect(({ currentTab }) => ({
  currentTab,
}))(TabItem);
