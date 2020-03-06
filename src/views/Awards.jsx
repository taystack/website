import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";

import arrow from "../assets/icons/arrow.svg";
import parisoma from "../assets/pictures/parisoma.jpg";
import spur from "../assets/pictures/spur.jpg";



export default function Awards() {
  return (
    <Layer breakColor="blue" id="page5">
      <Card leftPad id="page5-1">
        <Image src={parisoma} alt="2013 TM Forum API Hackathon" />
        <div>
          <h2 id="tm-forum">Grand Prize</h2>
          <p style={{ opacity: 0.9 }}>2013 TM Forum API Hackathon</p>
          <p>
            Along side Ryan Leckey and Eric Healy we won grand prize for the best overall use of the TM Forum APIs.
          </p>
          <AnchorLink href="#page5-2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
      </Card>

      <Card rightPad id="page5-2">
        <div>
          <h2 id="novartis">Mashery API Award</h2>
          <p style={{ opacity: 0.9 }}>2013 Novartis Health Care Hackathon</p>
          <p>
            Along side Ryan Leckey, Eric Healy, and Hardy Jones we won the Mashery API Award for the best leverage of the Mashery APIs.
          </p>
          <AnchorLink href="#Footer" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
        <Image src={spur} alt="Run all the tests on this baby" />
      </Card>
    </Layer>
  );
};
