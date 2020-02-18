import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { connect } from "react-redux";
import About from "./views/About";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Header from "./components/Header";
import Transition from "./components/Transition";
import BackgroundTriangles from "./components/BackgroundTriangles";
import { black, white } from "./constants/colors";
import { setCurrentTab } from "./redux/Actions";
import "./styles/TabItem.css";


const Routes = connect()(({
  dispatch,
}) => {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.currentTab) dispatch(setCurrentTab(params.currentTab));
  }, [params]);

  return (
    <>
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/contact" component={Contact} />
    </>
  );
});

const AppRouter = () => {
  useEffect(() => {
    document.body.style.background = black;
  }, []);
  return (
    <BrowserRouter>
      <div style={{ position: "relative" }}>
        <Header />
        <Route path="/:currentTab" component={Routes} />
        <Route exact path="/" component={About} />
      </div>
      <Route component={Error404} />
    </BrowserRouter>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
