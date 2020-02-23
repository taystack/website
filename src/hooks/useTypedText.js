import Random from "../helpers/Random";
import { useState, useEffect, useMemo } from "react";


// global.TypedText as the default export
export default (global.TypedText || (global.TypedText = new UseTypedText()));

// TypedText definition:
function UseTypedText() {
  // How fast we type;
  this.typeSpeed = 60; // ms
  // Do we time the space string " "?
  this.skipSpace = true;
  // The use-prompt to show when typing
  this.currentPrompt = "| ";
  // The done-prompt to show when typing
  this.donePrompt = "> ";
  // The cursor to show when typing
  this.cursor = "█";

  // Set the type speed
  this.setTypeSpeed = function setTypeSpeed(typeSpeed) { this.typeSpeed = typeSpeed; }
  // Set the cursor
  this.setCursor = function setCursor(cursor) { this.cursor = cursor; }
  // Remove the cursor
  this.removeCursor = function removeCursor() { this.setCursor(""); }
  // Get a random stroke speed at (this.typeSpeed +- 50ms)
  this.getStrokeSpeed = function getStrokeSpeed() { return Random(this.typeSpeed - 50, this.typeSpeed + 50); }
}

// Export the hook
export function useTypedText(onDone = () => {}, unloadTrigger = false) {
  // Track the currently typed value
  const [value, setValue] = useState("");
  // Track the value we want to type to
  const [typeTo, setTypeTo] = useState("");
  // Track the timeout id for clean-up on unmount
  const [tOut, setTOut] = useState();
  const [savedTrigger, setSavedTrigger] = useState(unloadTrigger);

  // Clean-up the timeout trackers, prevent unmounting errors
  function unload() {
    setTOut(clearTimeout(tOut));
  }

  // When we have text to type to...
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
        }, global.TypedText.getStrokeSpeed()));
      }
    } else if (typeTo.length) {
      onDone(typeTo);
      unload();
    }
  }, [typeTo, value]);

  // When the unload trigger changes...
  useEffect(() => {
    if (unloadTrigger !== savedTrigger) unload();
  }, [unloadTrigger]);

  function typeToAnother(string) {
    unload();
    setValue("");
    setTypeTo(string);
  }

  // When we unmount...
  useEffect(() => {
    return () => { unload() };
  }, []);

  // Memoize the prompt/cursor for the return value when the timeout changes
  // Tiny optimization only noticed when spaces are skipped. But an inch is an inch amirite
  const [prompt, cursor] = useMemo(() => {
    if (typeTo.length && tOut) {
      return [global.TypedText.currentPrompt, global.TypedText.cursor];
    }
    else if (typeTo.length) {
      return [global.TypedText.donePrompt, ""];
    }
    return ["", ""];
  }, [tOut, typeTo]);

  // Return the typed value and the setter for triggering the typing
  return [
    `${prompt}${value}${cursor}`,
    setTypeTo,
    value,
    typeToAnother,
  ];
}
