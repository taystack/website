import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";

import arrow from "../assets/icons/arrow.svg";
import californiaSrc from "../assets/bio/california.svg";


export default function Splash() {
  return (
    <Layer isTop breakColor="green" id="page1">
      <Card leftPad>
        <Image style={{minWidth: "50vw", maxHeight: "50vh"}} src={californiaSrc} />
        <div>
          <h1>Hey, I'm Taylor</h1>
          <p>I'm a software engineer from California.</p>
          <h2>I build web apps</h2>
          <AnchorLink href="#page2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer" }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
            <span style={{ opacity: 0.5, marginLeft: 20 }}>Scroll down to learn more</span>
          </AnchorLink>
        </div>
      </Card>
    </Layer>
  );
};
