const borderChars = (text, char = "-") => {
  const border = Array(text.length).fill(char).join("");
  return `${border}
${text}
${border}
`;
};

const init = borderChars("Hey, Welcome to my Javascript console.", "-");


// Turn every letter into a span.
const spanify = text => text.split("").map(l => `<span>${l}</span>`).join("");

// Clone a node and spanify its text contents
const createSpanClone = (el, id) => {
  const clone = el.cloneNode();
  clone.id = "magnet-pointer";
  document.body.appendChild(clone);
  clone.innerHTML = spanify(el.innerText);
  clone.syle.setProperty("position", "fixed");
  clone.syle.setProperty("top", el.offsetTop);
  clone.syle.setProperty("left", el.offsetLeft);
  return clone;
};

export default class JSConsole {
  constructor() {
    console.log(init);
    this.magnetPointer = undefined;
  }

  magnetize(id) {
    const el = document.getElementById(id);
    this.magnetPointer = createSpanClone(el, "magnet-pointer");
    return this.magnetPointer;
  }

  async getUser(username = "taystack") {
    const src = `https://api.github.com/users/${username}/repos`;
    const user = await fetch(src);
    const data = await user.json();
    console.log("data", data.map(({ name, id }) => ({ name, id })));
  }
}
