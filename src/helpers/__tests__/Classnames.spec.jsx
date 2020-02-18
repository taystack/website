import React from "react";
import Classnames from "../Classnames";


describe("Classnames", () => {
  it("should render classnames", () => {
    let args = [];
    let aussie = true;
    let english = false;
    let cls = Classnames(...args);

    expect(cls).toEqual("");

    args = ["hey,", [[["how"]], "the hell"], () => ("are you"), {
      doing: english,
      going: aussie,
    }, () => (aussie ? "mate?" : "mah dude?")];
    cls = Classnames(...args);
    expect(cls).toEqual("hey, how the hell are you going mate?");

    aussie = false;
    english = true;
    args = ["hey,", [[["how"]], "the hell"], () => ("are you"), {
      doing: english,
      going: aussie,
    }, () => (aussie ? "mate?" : "mah dude?")];
    cls = Classnames(...args);
    expect(cls).toEqual("hey, how the hell are you doing mah dude?");
  });
});
