import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Classnames from "../helpers/Classnames";


const Card = ({
  children,
  leftPad,
  rightPad,
}) => {
  const isSingle = children && !children[0];
  const className = Classnames("Card", { single: isSingle, leftPad, rightPad });
  return (
    <div className={className} style={{
      width: "100vw",
      maxWidth: 1000,
      margin: "0 auto",
      paddingBottom: "10vh",
      paddingTop: "10vh",
      display: "flex",
      justifyContent: "space-around",
      flexFlow: "row wrap",
    }}>
      {children && children.length && (<>
        <CardSide padded={leftPad}>{children && children[0]}</CardSide>
        <CardSide padded={rightPad}>{children[1] && children[1]}</CardSide>
      </>)}
      {children && !children[0] && <CardSide padded={leftPad || rightPad}>{children}</CardSide>}
    </div>
  );
}

function CardSide({ children, padded }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  return (
    <div className="CardSide" style={style}>
      {children}
    </div>
  );
}


Card.propTypes = {
  children: PropTypes.any,
  light: PropTypes.bool,
  isTop: PropTypes.bool,
}

Card.defaultProps = {
  isTop: false,
  light: false,
};

export default Card;
