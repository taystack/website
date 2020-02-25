import React, { useEffect } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Layer from "../components/Layer";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Image from "../components/Image";
import Transition from "../components/Transition";
import error404 from "../assets/bio/error.svg";
import { setCurrentTab } from "../redux/Actions";


const Error404 = ({
  dispatch,
  currentTab,
}) => {
  useEffect(() => {
    console.log("setting ERROR from", error404);
    dispatch(setCurrentTab("error"));
  }, []);
  return (
    <Transition>
      <Layer breakColor="red" isTop>
        <Card leftPad>
          <Image src={error404} style={{ height: "30vw" }} />
          <div>
            <h1>Error 404</h1>
            <p>I'm not sure how you got here, but there really isn't anything here.</p>
          </div>
        </Card>
      </Layer>
    </Transition>
  );
};

Error404.propTypes = {};

export default connect(({
  currentTab,
}) => ({
  currentTab,
}))(Error404);
