import colors from "../constants/colors";
import bubblesBlue from "../assets/bubbles/blue.svg";
import bubblesBlueBottom from "../assets/bubbles/blueBottom.svg";
import bubblesBlueLoose from "../assets/bubbles/blueLoose.svg";
import bubblesOrange from "../assets/bubbles/orange.svg";
import bubblesOrangeBottom from "../assets/bubbles/orangeBottom.svg";
import bubblesOrangeLoose from "../assets/bubbles/orangeLoose.svg";
import bubblesPurple from "../assets/bubbles/purple.svg";
import bubblesPurpleBottom from "../assets/bubbles/purpleBottom.svg";
import bubblesPurpleLoose from "../assets/bubbles/purpleLoose.svg";
import bubblesRed from "../assets/bubbles/red.svg";
import bubblesRedBottom from "../assets/bubbles/redBottom.svg";
import bubblesRedLoose from "../assets/bubbles/redLoose.svg";
import bubblesGreen from "../assets/bubbles/green.svg";
import bubblesGreenBottom from "../assets/bubbles/greenBottom.svg";
import bubblesGreenLoose from "../assets/bubbles/greenLoose.svg";
import bubblesWhite from "../assets/bubbles/white.svg";
import bubblesWhiteBottom from "../assets/bubbles/whiteBottom.svg";
import bubblesWhiteLoose from "../assets/bubbles/whiteLoose.svg";


export default class ImageColors {
  static get all() {
    return ({
      blue: {
        font: "#fff",
        color: colors.blue,
        img: bubblesBlue,
        img2: bubblesBlueBottom,
        img3: bubblesBlueLoose,
      },
      green: {
        font: "#fff",
        color: colors.green,
        img: bubblesGreen,
        img2: bubblesGreenBottom,
        img3: bubblesGreenLoose,
      },
      orange: {
        font: "#fff",
        color: colors.orange,
        img: bubblesOrange,
        img2: bubblesOrangeBottom,
        img3: bubblesOrangeLoose,
      },
      purple: {
        font: "#fff",
        color: colors.purple,
        img: bubblesPurple,
        img2: bubblesPurpleBottom,
        img3: bubblesPurpleLoose,
      },
      red: {
        font: "#fff",
        color: colors.red,
        img: bubblesRed,
        img2: bubblesRedBottom,
        img3: bubblesRedLoose,
      },
      white: {
        font: colors.black,
        color: colors.white,
        img: bubblesWhite,
        img2: bubblesWhiteBottom,
        img3: bubblesWhiteLoose,
      },
    });
  }

  static get tabs() {
    const colors = ImageColors.all;
    return ({
      about: "green",
      error: "red",
      skills: "purple",
    });
  }

  static from(key) {
    return ImageColors.all[key] || ImageColors.all["white"];
  }

  static fromTab(tabName) {
    return ImageColors.tabs[tabName] || ImageColors.tabs[tabName];
  }
}
