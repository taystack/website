import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";
import CommunityIcons from "../components/CommunityIcons";

import arrow from "../assets/icons/arrow.svg";
import ownershipSrc from "../assets/bio/ownership.svg";
import skillsSrc from "../assets/bio/skills.svg";
import toolkitSrc from "../assets/bio/toolkit.svg";


export default function Me() {
  return (
    <Layer breakColor="blue" id="page2">
      <Card rightPad id="page2_1">
        <div>
          <h2>I drink rocket fuel</h2>
          <p>
            I'm a straight-up JavaScript powerhouse.
            I've also spent years in agile development across many teams.
            I know how to estimate my throughput to deliver above and beyond what is expected.
            Point me at feature gaps if you want to fill them.
            Point me at a problem areas to make them go away.
          </p>
          <AnchorLink href="#page2-2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer" }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
        <Image src={skillsSrc} alt="JavaScript powerhouse" />
      </Card>
      <Card leftPad id="page2-2">
        <Image test src={ownershipSrc} />
        <div>
          <h2>I take ownership</h2>
          <p>When a project is handed to me it becomes my baby. I'm proud of my work and do my best to encourage the same from my colleagues.</p>
          <AnchorLink href="#page2_3" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer" }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
      </Card>
      <Card rightPad id="page2_3">
        <div>
          <h2>I look into the future</h2>
          <p>The JavaScript community moves fast. Real fast. That's why it's important for me to be a part of it. I'm always adding new skill to my tool belt.</p>
          <CommunityIcons />
          <AnchorLink href="#page3" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
        <Image src={toolkitSrc} alt="JavaScript tools" />
      </Card>
    </Layer>
  );
};
