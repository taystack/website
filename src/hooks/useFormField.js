/*

HOOK useFormField ( STRING defaultValue = "" )

Simple hook born from abstracting repeated code.


PARAMS:

 - STRING defaultValue - it is what it is.


USE:

  const [value, setValue, error, setError] = useFormField();

*/


import { useEffect, useState } from "react";


export default function useFormField(defaultValue = "") {

  // Store the default value of the input
  const [value, setValue] = useState(defaultValue);

  // Store the error
  const [error, setError] = useState("");

  // When VALUE changes...
  useEffect(() => {

    // Undo the error if the user has entered something.
    if (value.length > 0) setError("");

  }, [value]);

  // Send all the stuff back. You don't really need error.
  return [value, setValue, error, setError];
}
