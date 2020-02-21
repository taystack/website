import React, { useEffect } from "react";
import Transition from "../components/Transition";
import Layer from "../components/Layer";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Image from "../components/Image";
import PropTypes from "prop-types";
import skills, { message } from "../constants/skills";
import colors from "../constants/colors";
import bubblesPurple from "../assets/bubbles/purple.svg";
import bubblesBlack from "../assets/bubbles/black.svg";
// import SkillsInput from "../components/Skills/SkillsInput";
// import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";
import science from "../assets/bio/science.svg";



const Skills = () => {
  // useGoogleAnalytics("skills");
  useEffect(() => {
    document.title = "Skills | Taylor Stackpole the software engineer"
  }, []);
  return (
    <Transition id="skills-view" transition="fade-slide">
      <Layer isTop dark>
        <Card leftPad>
          <Image src={science} />
          <div>
            <h1>{message.first.title}</h1>
            <p>{message.first.text}</p>
          </div>
        </Card>
      </Layer>

      <Layer>
        <Card leftPad>
          <Image src={science} />
          <div>
            <h2>Assesment sources</h2>
            <p>This is a list of the publicly available assessment providers that contributed to the data above.</p>
          </div>
        </Card>
      </Layer>

    </Transition>
  );
};

Skills.propTypes = {};

export default Skills;
