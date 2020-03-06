import React from "react";
import PropTypes from "prop-types";
import Classnames from "../helpers/Classnames";


const Card = ({
  children,
  leftPad,
  rightPad,
  ...props
}) => {
  const isSingle = children && !children[0];
  const className = Classnames("Card", { single: isSingle, leftPad, rightPad });
  return (
    <div {...props} className={className} style={{
      width: "100vw",
      maxWidth: 1000,
      margin: "0 auto",
      paddingBottom: "10vh",
      paddingTop: "10vh",
      display: "flex",
      justifyContent: "space-around",
    }}>
      {children && children.length && (<>
        <CardSide side="left" padded={leftPad}>{children && children[0]}</CardSide>
        <CardSide side="right" padded={rightPad}>{children[1] && children[1]}</CardSide>
      </>)}
      {children && !children[0] && <CardSide padded={leftPad || rightPad}>{children}</CardSide>}
    </div>
  );
}

function CardSide({ children, padded, side }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const className = Classnames("CardSide", side, { padded });

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}


Card.propTypes = {
  children: PropTypes.any,
}

export default Card;
