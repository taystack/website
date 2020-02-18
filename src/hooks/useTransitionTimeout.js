import { useState, useEffect } from "react";

/*
HOOK     useTransitionTimeout ( milliseconds NUMBER )

RETURNS  [ done BOOL, init FUNC, unload FUNC ] ARRAY

PARAMS
  - milliseconds: time in milliseconds before isDone is set to true;



USE:

const [isDone, startTimeout, onUnmount] = useTransitionTimeout

*/
export default function useTransitionTimeout(milliseconds, trigger) {
  const [done, setDone] = useState(false);
  const [doneTimeout, setDoneTimeout] = useState();
  useEffect(() => {
    setDone(false);
  }, [trigger]);
  function init() {
    setDone(false);
    setDoneTimeout(setTimeout(() => {
      setDone(true);
    }, milliseconds));
  }
  function unload() { clearTimeout(doneTimeout) };
  return [done, init, unload];
}
