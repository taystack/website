import { useEffect, useState } from "react"


const leetMap = {
  a: "4",
  b: "8",
  c: "¢",
  d: "D",
  e: "3",
  f: "ƒ",
  g: "&",
  h: "#",
  i: "!",
  j: "J",
  k: "K",
  l: "1",
  m: "M",
  n: "И",
  o: "0",
  p: "P",
  q: "Q",
  r: "Я",
  s: "5",
  t: "7",
  u: "µ",
  v: "V",
  w: "Ш",
  x: "X",
  y: "Y",
  z: "2",
};

export default function useLeet( defaultValue = "" ) {
  const [ value, setValue ] = useState(defaultValue);
  const [ leet, setLeet ] = useState("");

  // When VALUE changes...
  useEffect(() => {

    function getLeetValue(letter) {
      let leetValue = leetMap[letter];
      return leetValue ? leetValue : letter
    }

    // Set the returned 73X7 70 1337 5P34K
    const leetSpeak = value.split("").map(getLeetValue);
    setLeet(value);

  }, [value]);

  return [leet, setValue];
}
