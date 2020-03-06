import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";

import science from "../assets/bio/science.svg";
import responsive from "../assets/bio/responsive_plain.svg";
import arrow from "../assets/icons/arrow.svg";
import {
  emailLink,
  projectProfile,
} from "../constants/contact";


export default function Design() {
  return (
    <Layer breakColor="orange" id="page4">
      <Card leftPad id="page4-1">
        <Image src={science} alt="I design too" />
        <div>
          <h2 id="designer">I designed this website</h2>
          <p>
            My greatest weakness as a web developer is design, but I love art.
            I build corporate apps, but I like building stuff like this.
            All of the images were designed as SVGs. That means each one is perfectly crisp down to the half-pixel on your retina device.
            <a target="_blank" href={emailLink}>Email me</a> or <a target="_blank" href={projectProfile}>visit this project</a> if you have any suggestions.
          </p>
          <AnchorLink href="#page4-2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
      </Card>

      <Card rightPad id="page4-2">
        <div>
          <h2 id="responsive">I understand responsive design</h2>
          <p>
            This website is responsive.
            I'm guessing it works on your device right now.
            Even if you turn off JavaScript this website will still work.
            I'm all about making content available to users so I research the best, light-weight methods of presentation.
            I've been employing <code>flexbox</code> with <code>@media</code> query layouts for years.
          </p>
          <AnchorLink href="#page5" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
        <Image src={responsive} alt="Responsive design" />
      </Card>

    </Layer>
  );
};
