/*
Recursive string generator.

HELPER    Classnames ( ...ARGS )

PARAMS    ARGS
 - Can be one of [STRING, OBJECT, FUNC, ARRAY]

USE:

const string = Classnames(
  ["Hey", "I'm"],
  () => (always ? "always" : "sometimes"),
  {
    good: isGood,
    bad: !isGood,
  }
);

// isGood = true, always = true,
//  -> Hey I'm always good

// isGood = false, always = false,
//  -> Hey I'm sometimes bad

*/

export default function Classnames(...args) {
  const classNames = [];
  args.forEach((cls) => {
    if (typeof cls === "string") {

      classNames.push(cls);

    } else if (cls instanceof Array) {

      classNames.push(Classnames(...cls));

    } else if (cls instanceof Function) {

      classNames.push(Classnames(cls()));

    } else if (cls instanceof Object) {

      Object.keys(cls).forEach(cnKey => {
        if (cls[cnKey]) classNames.push(cnKey);
      });

    } else if (cls && cls.toString) {

      classNames.push(cls.toString());

    }
  });
  return classNames.join(" ");
};
