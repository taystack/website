import Random from "../helpers/Random";
import { useState, useEffect, useMemo } from "react";


export default (global.TypedText || (global.TypedText = new UseTypedText()));

function UseTypedText() {
  this.typeSpeed = 50; // ms
  this.skipSpace = true;
  this.cursor = "█";

  this.setTypeSpeed = function setTypeSpeed(typeSpeed) { this.typeSpeed = typeSpeed; }
  this.setCursor = function setCursor(cursor) { this.cursor = cursor; }
  this.getStrokeSpeed = function getStrokeSpeed() { return Random(this.typeSpeed - 50, this.typeSpeed + 50); }
}

export function useTypedText(onDone = () => {}, unloadTrigger = false) {
  const [value, setValue] = useState("");
  const [typeTo, setTypeTo] = useState("");
  const [tOut, setTOut] = useState();
  const [savedTrigger, setSavedTrigger] = useState(unloadTrigger);

  function unload() {
    setTOut(clearTimeout(tOut));
  }

  useEffect(() => {
    // Make sure we have a target string length, and we haven't gotten there yet.
    if (typeTo.length && value.length !== typeTo.length) {
      // Get the next letter
      const newString = typeTo.substring(0, value.length + 1);

      // Check if the global setting for skipSpace is set to ignore spaces
      if (global.TypedText.skipSpace && newString[newString.length - 1] === " ") {
        // Immediately set
        setValue(newString);
      } else {
        // Type out the next letter
        setTOut(setTimeout(() => {
          setValue(newString);
          unload();
        }, Random(50, 100)));
      }
    } else if (typeTo.length) {
      onDone(typeTo);
      unload();
    }
  }, [typeTo, value]);

  useEffect(() => {
    if (unloadTrigger !== savedTrigger) unload();
  }, [unloadTrigger]);

  const [buffer, cursor] = useMemo(() => {
    if (typeTo.length && tOut) {
      return ["> ", global.TypedText.cursor];
    }
    else if (typeTo.length) {
      return ["- ", ""];
    }
    return ["", ""];
  }, [tOut, typeTo]);
  // (
    // tOut ? ["> ", global.TypedText.cursor] : ["-  ", ""]), [tOut, value]
  // );

  return [
    `${buffer}${value}${cursor}`,
    setTypeTo,
  ];
}
