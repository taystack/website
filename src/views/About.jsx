import React, { useEffect } from "react";
import Transition from "../components/Transition";
import Footer from "../components/Footer";
import Splash from "./Splash";
import Design from "./Design";
import Practice from "./Practice";
import Me from "./Me";
import Awards from "./Awards";

import arrow from "../assets/icons/arrow.svg";


const About = ({
  dispatch,
}) => {
  useEffect(() => {
    document.title = "About | Taylor Stackpole 7h3 50f7w4r3 3ngin33r";
  }, []);

  return (
    <Transition transition="fade-slide">
      <Splash />
      <Me />
      <Practice />
      <Design />
      <Awards />
    </Transition>
  );
};

export default About;
