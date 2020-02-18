import React, { useEffect } from "react";
import { connect } from "react-redux";
import Transition from "../components/Transition";
import Footer from "../components/Footer";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";
import colors from "../constants/colors";
import about from "../constants/about";
import { setCurrentTab } from "../redux/Actions";

import bubblePurpleSrc from "../assets/bubbles/purple.svg";
import aboutSrc from "../assets/bio/about.svg";
import coffeeSrc from "../assets/bio/coffee.svg";
import contactSrc from "../assets/bio/contact.svg";
import skillsSrc from "../assets/bio/skills.svg";
import toolsSrc from "../assets/bio/tools.svg";
import modulesSrc from "../assets/bio/modules.svg";
import bigDataSrc from "../assets/bio/bigdata.svg";


const About = ({
  dispatch,
}) => {
  return (
    <Transition transition="fade-slide">
      <Layer isTop dark>
        <Card>
          <Image src={aboutSrc} />
          <div>
            <h1>Hey, I'm Taylor</h1>
            <p>I'm a full-stack software engineer from California.</p>
            <p>I build web apps.</p>
          </div>
        </Card>
      </Layer>

      <Layer>
        <Card rightPad>
          <div>
            <h2>drinking rocket fuel</h2>
            <p>Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger. T-bone kielbasa tenderloin meatloaf, tail chicken pork belly doner alcatra shoulder jowl pork chop cupim cow.</p>
          </div>
          <Image src={coffeeSrc} />
        </Card>
        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h2>skill building</h2>
            <p>Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger. T-bone kielbasa tenderloin meatloaf, tail chicken pork belly doner alcatra shoulder jowl pork chop cupim cow.</p>
          </div>
        </Card>
        <Card rightPad>
          <div>
            <h2>Bit about me</h2>
            <p>Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger. T-bone kielbasa tenderloin meatloaf, tail chicken pork belly doner alcatra shoulder jowl pork chop cupim cow.</p>
          </div>
          <Image src={toolsSrc} />
        </Card>
      </Layer>

      <Layer dark>
        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h2>Skills</h2>
            <p>Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger.</p>
          </div>
        </Card>

        <Card rightPad>
          <div>
            <h2>Thangs</h2>
            <p>
              Bacon ipsum dolor amet ball tip ribeye pork loin andouille jowl short ribs pancetta tongue beef ribs. Kielbasa tenderloin kevin venison biltong drumstick, turkey frankfurter pig. Turkey landjaeger chuck strip steak drumstick kevin ribeye tri-tip pig. Pork ground round meatball turkey, jowl shank pancetta cupim beef ribs tenderloin ham hock swine pig hamburger. T-bone kielbasa tenderloin meatloaf, tail chicken pork belly doner alcatra shoulder jowl pork chop cupim cow. Drumstick kevin flank, beef turducken alcatra capicola shankle pork loin t-bone tongue jerky pig pastrami jowl.
            </p>
          </div>
          <Image src={contactSrc} />
        </Card>
      </Layer>

      <Footer />
    </Transition>
  );
};

About.propTypes = {};

export default connect(({ currentTab }) => ({
  currentTab,
}))(About);
