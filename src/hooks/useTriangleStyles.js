import { useState, useEffect } from "react";


export default function useTriangleStyles(show, color, offset = 0, userStyles = {}) {
  const defaultStyles = {
    ...userStyles,
    position: "absolute",
    right: `-${50 + offset}vw`,
    width: 0,
    height: 0,
    transition: "right 400ms ease-in-out",
    borderTop: `${100 + offset}vh solid transparent`,
    borderRight: `${20 + offset}vw solid ${color}`,
    top: `-${offset}vh`,
  };

  const [styles, setStyles] = useState(defaultStyles);

  useEffect(() => {
    if (show) {
      setStyles({
        ...defaultStyles,
        right: 0,
      });
    } else {
      setStyles(defaultStyles);
    }
  }, [show]);

  return styles;
};
