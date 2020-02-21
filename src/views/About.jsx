import React, { useEffect } from "react";
import { connect } from "react-redux";
import Transition from "../components/Transition";
import Footer from "../components/Footer";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";
import Button from "../components/Button";
import CommunityIcons from "../components/CommunityIcons";
import colors from "../constants/colors";
import about from "../constants/about";
import {
  emailLink,
  projectProfile,
} from "../constants/contact";
import { setCurrentTab } from "../redux/Actions";
// import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

import aboutSrc from "../assets/bio/about.svg";
import scienceSrc from "../assets/bio/science.svg";
import californiaSrc from "../assets/bio/california.svg";
import coffeeSrc from "../assets/bio/coffee.svg";
import contactSrc from "../assets/bio/contact.svg";
import skillsSrc from "../assets/bio/skills.svg";
import toolsSrc from "../assets/bio/tools.svg";
import toolkitSrc from "../assets/bio/toolkit.svg";
import modulesSrc from "../assets/bio/modules.svg";
import ownershipSrc from "../assets/bio/ownership.svg";
import tree from "../assets/bio/tree_bench_plain.svg";
import bigDataSrc from "../assets/bio/bigdata.svg";
import responsive from "../assets/bio/responsive_plain.svg";
import testing from "../assets/bio/testing.svg";



const About = ({
  dispatch,
}) => {
  // useGoogleAnalytics("about");
  useEffect(() => {
    document.title = "About | Taylor Stackpole the software engineer"
  }, []);
  return (
    <Transition transition="fade-slide">
      <Layer isTop breakColor="green">
        <Card leftPad>
          <Image style={{minWidth: "50vw", maxHeight: "50vh"}} src={californiaSrc} />
          <div>
            <h1>Hey, I'm Taylor</h1>
            <p>I'm a software engineer from California.</p>
            <h2>I build web apps</h2>
          </div>
        </Card>
      </Layer>

      <Layer breakColor="blue">
        <Card rightPad>
          <div>
            <h2>I drink rocket fuel</h2>
            <p>
              I've spent years in agile development across many teams.
              I know how to estimate my throughput to deliver above and beyond what is expected.
              Point me at feature gaps if you want to fill them.
              Point me at a problem areas to make them go away.
            </p>
          </div>
          <Image src={scienceSrc} />
        </Card>
        <Card leftPad>
          <Image test src={ownershipSrc} />
          <div>
            <h2>I take ownership</h2>
            <p>When a project is handed to me it becomes my baby. I'm proud of my work and do my best to encourage the same from my colleagues.</p>
          </div>
        </Card>
        <Card rightPad>
          <div>
            <h2>I look into the future</h2>
            <p>The JavaScript community moves fast. Real fast. That's why it's important for me to be a part of it. I'm always adding new skills to my tool belt.</p>
            <CommunityIcons />
          </div>
          <Image src={toolkitSrc} />
        </Card>
      </Layer>

      <Layer breakColor="purple">
        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h2 id="i-am-js">I passionately JavaScript</h2>
            <p>
              I'm a straight-up JavaScript powerhouse.
              I'm hip on the latest <a href="https://www.w3.org/standards/webdesign/script" target="_blank">ECMA JavaScript, and CSS3 Web APIs.</a>&nbsp;
              I've yet to find a JavaScript bug I couldn't squish, or a library I couldn't get working or written.
            </p>
          </div>
        </Card>

        <Card rightPad>
          <div>
            <h2 id="test-the-things">I test all the things</h2>
            <p>
              I run Unit tests for the modules.
              I run Integration tests for the controllers, and views.
              I run Regression tests for the features.
              I run tests so this baby is ready to rock.
            </p>
          </div>
          <Image src={testing} />
        </Card>

        <Card leftPad>
          <Image src={skillsSrc} />
          <div>
            <h2 id="designer">I designed this website</h2>
            <p>
              My greatest weakness as a web developer is design, but I love art.
              I build corporate apps, but I like building stuff like this.
              All of the images were designed as SVGs. That means each one is perfectly crisp down to the half-pixel on your retina device.
              <a target="_blank" href={emailLink}>Email me</a> or <a target="_blank" href={projectProfile}>visit this project</a> if you have any suggestions.
            </p>
          </div>
        </Card>

        <Card rightPad>
          <div>
            <h2 id="responsive">I understand responsive design</h2>
            <p>
              This website is responsive.
              I'm guessing it works on your device right now.
              You already noticed the crispy vector art.
              Even if you turn off JavaScript this website will still work.
              I'm all about making content available to users so I research the best, light-weight methods of presentation.
              I've been employing <code>flexbox</code> with <code>@media</code> query layouts for years.
            </p>
          </div>
          <Image src={responsive} />
        </Card>

      </Layer>
    </Transition>
  );
};

About.propTypes = {};

export default connect(({ currentTab }) => ({
  currentTab,
}))(About);
