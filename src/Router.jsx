import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { useHistory, useParams, useLocation } from "react-router";
import { connect } from "react-redux";
import About from "./views/About";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import colors from "./constants/colors";
import {
  setCurrentTab,
  // getGithubProjectIssues,
} from "./redux/Actions";


const Routes = connect(({ currentTab }) => ({ currentTab }))(({
  dispatch,
  currentTab,
}) => {
  const params = useParams();

  const location = useLocation();
  console.log("location", location);

  useEffect(() => {
    if (params.currentTab) dispatch(setCurrentTab(params.currentTab));
    else dispatch(setCurrentTab("about"));
  }, [params]);

  return (
    <>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/contact" component={Contact} />
    <Route component={Error404} />
    <Footer />
    </>
  );
});

const AppRouter = () => {
  useEffect(() => {
    document.body.style.background = colors.black2;
  }, []);
  return (
    <BrowserRouter>
      <div style={{ position: "relative" }}>
        <Header />
        <Route path="/:currentTab" component={Routes} />
        <Route exact path="/" component={Routes} />
        {/* <Route exact path="/" component={About} /> */}
      </div>
    </BrowserRouter>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
