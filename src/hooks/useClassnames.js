import { useMemo } from "react";
import Classnames from "../helpers/Classnames";


// When arguments change, update the memo
export function useClassnames(...args) {
  return useMemo(() => Classnames(...args), [...args]);
}
