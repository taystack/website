/*

HOOK useRequiredFormField ( STRING defaultValue = "" )

Simple hook born from abstracting repeated code.


PARAMS:

 - STRING defaultValue - it is what it is.


USE:

  const [value, setValue, error, setError] = useRequiredFormField();

*/

import { useEffect, useState } from "react";


const Hotwire = {};

export default function usePhoneFormat(defaultValue = "") {

  // Store the default value
  const [phone, setPhone] = useState(defaultValue);

  // Store the phone format
  const [format, setFormat] = useState("");

  // When PHONE changes...
  useEffect(() => {

    // Grab just the numbers
    const numbers = phone.replace(/[^0-9]/gi, "");

    // Keep an ordered list of the numbers we will use
    const fmt = [];
    if (numbers) {
      try {
        numbers.toString().split("").forEach((num, i) => {
          if (i === 3 || i === 6) fmt.push("-");
          if (i === 10) throw Hotwire;
          fmt.push(num);
        });
      } catch(e) {
        if (e !== Hotwire) throw(e);
      }
    }
    setFormat(fmt.join(""));
  }, [phone]);

  return [format, setPhone];
}
