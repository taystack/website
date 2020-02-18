import React from "react";
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
import SkillsInput from "../components/Skills/SkillsInput";
import skillsSrc from "../assets/bio/skills.svg";



const Skills = () => {
  return (
    <Transition id="skills-view" transition="fade-slide">
      <Layer isTop dark>
        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h1>{message.first.title}</h1>
            <p>{message.first.text}</p>
          </div>
        </Card>
      </Layer>

      <Layer>
        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h2>Assesment sources</h2>
            <p>This is a list of the publicly available assessment providers that contributed to the data above.</p>
          </div>
        </Card>
      </Layer>

      {/* <Layer dark>
        <Card>
          <SkillsInput />
        </Card>

        <Card>
          <p id="test-1">
            Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger. T-bone kielbasa tenderloin meatloaf, tail chicken pork belly doner alcatra shoulder jowl pork chop cupim cow. Drumstick kevin flank, beef turducken alcatra capicola shankle pork loin t-bone tongue jerky pig pastrami jowl.
          </p>
        </Card>
      </Layer> */}

      <Footer />
    </Transition>
  );
};

Skills.propTypes = {};

export default Skills;
