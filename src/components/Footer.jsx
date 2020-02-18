import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "../components/Layer";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "../components/Image";
import SocialIcons from "../components/SocialIcons";
import colors from "../constants/colors";
import bubblesWhite from "../assets/bubbles/white.svg";
import emailImgSrc from "../assets/bio/email.svg";


const Footer = ({
  currentTab,
  bubbleSrc,
  background,
}) => {

  const handleEmailMe = () => {
    // window.open("mailto:", "_blank");
  };

  return (
    <>
    <Layer isBottom dark custom={[background, colors.black2, bubbleSrc]}>
      <Card rightPad>
        <p>
          Shank ham tenderloin prosciutto sausage chicken cow ground round. Ground round bresaola chislic rump, spare ribs andouille salami short loin sirloin turducken swine chuck. Turducken fatback pastrami, pork chop jowl ribeye venison rump picanha shoulder biltong ball tip. Pig beef jowl shank, flank salami tongue filet mignon turkey pastrami chuck. Pig rump shank ball tip frankfurter shankle hamburger beef brisket. Beef ribs corned beef alcatra bacon, shankle ham hock pork chop turducken brisket chuck leberkas. Bacon cupim turkey bresaola, meatball jowl spare ribs tenderloin leberkas hamburger tongue shank burgdoggen.
        </p>
        <div>
          {currentTab !== "contact" && <Image src={emailImgSrc} />}
        </div>
      </Card>
      <Card>
        <Button id="contact-action"
          background={colors.white}
          style={{ marginTop: 40 }}
          onClick={handleEmailMe}>Get in touch</Button>
      </Card>
    </Layer>
    <div style={{ position: "relative", height: "3vh", background: colors.white }}>
      <Image src={bubblesWhite} style={{
        position: "absolute",
        width: "100vw",
        fill: "green",
        bottom: "3vh",
      }} />
      <SocialIcons background={colors.white} />
    </div>
    </>
  )
};

Footer.defaultProps = {
};

export default connect(({ currentTab, theme, bubbleSrc, }) => ({
  currentTab,
  bubbleSrc,
  background: theme,
}))(Footer);
