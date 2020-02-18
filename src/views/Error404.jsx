import React, { useEffect, useParams } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layer from "../components/Layer";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Image from "../components/Image";
import Transition from "../components/Transition";
import { setCurrentTab } from "../redux/Actions";
import error404 from "../assets/bio/gears_plain.svg";


const Error404 = ({
  dispatch,
  currentTab,
}) => {

  if (currentTab !== "error") return null;

  return (
    <Transition>
      <Layer dark>
        <Card leftPad>
          <Image src={error404} />
          <div>
            <h1>Error 404</h1>
            <p>I'm not sure how you got here, but there really isn't anything here.</p>
          </div>
        </Card>
      </Layer>
      <Footer />
    </Transition>
  );
};

Error404.propTypes = {};

export default connect(({
  currentTab,
}) => ({
  currentTab,
}))(Error404);
