import {
  useState,
  useMemo,
  useEffect,
} from "react";

/*
HOOK     useTransitionStyles (
  transitionType  STRING,
  isDone          BOOL,
  userStyles      OBJECT,
  milliseconds    NUMBER,
)

RETURNS  styles OBJECT
  - for use with a style tag on react component.

PARAMS
  - STRING transitionType
    One of ["fade", "fade-slide"]

  - BOOL isDone
    When true will append the proper finished state styles

  - OBJECT userStyles
    If present, will merge with returned styles at lesser precedence.

  - NUMBER milliseconds
    Time in milliseconds before the done styles are applied.

USE:

const [isDone, startTimeout, onUnmount] = useTransitionStyles

*/
export default function useTransitionStyles(
  transitionType,
  isDone,
  userStyles = {},
  milliseconds = 250
) {
  const defaultStyles = useMemo(() => {
    let styles = {
      position: "relative",
      opacity: 0,
      transition: `opacity ${milliseconds + 100}ms`,
    };
    if (transitionType !== "fade") {
      styles = {
        ...styles,
        top: 20,
        transition: `opacity ${milliseconds + 100}ms, top ease-out ${milliseconds}ms`,
      };
    }
    return {
      ...userStyles,
      ...styles,
    };
  }, [transitionType, milliseconds]);

  const [styles, setStyles] = useState(defaultStyles);

  useEffect(() => {
    setStyles({
      ...defaultStyles,
      opacity: isDone ? 1 : 0,
      top: 0,
    });
  }, [transitionType, isDone]);

  return styles;
}
