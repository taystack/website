import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Image from "../components/Image";

import arrow from "../assets/icons/arrow.svg";
import concerns from "../assets/bio/concerns.svg";
import testing from "../assets/bio/testing.svg";



export default function Practice() {
  return (
    <Layer breakColor="purple" id="page3">
      <Card leftPad id="page3-1">
        <Image src={concerns} alt="Separate different web application concerns" />
        <div>
          <h2>I modularize and optimize</h2>
          <p>
            The first step to optimizing a process is to define the moving parts.
            I've had to deal with enormous projects in my profession.
            The best projects to work on have clearly defined architectures, where each piece plays a clearly defined role.
            When things don't make sense, I communicate with colleagues until we build a roadmap to fix it.
          </p>
          <AnchorLink href="#page3-2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
      </Card>

      <Card rightPad id="page3-2">
        <div>
          <h2 id="test-the-things">I test all the things</h2>
          <p>
            Meaningful test coverage is crucial to ensure code does what you think it does.
            I create small, dedicated modules that are perfect for testing in isolation, or mocking for other modules.&nbsp;
            <a href="https://stackoverflow.com/questions/44769404/jest-spyon-function-called/46735186#46735186">I understand how to test.</a>
          </p>
          <AnchorLink href="#page4" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", marginTop: 20 }}>
            <Image style={{ height: 50, width: "auto" }} src={arrow} />
          </AnchorLink>
        </div>
        <Image src={testing} alt="Run all the tests on this baby" />
      </Card>
    </Layer>
  );
};
