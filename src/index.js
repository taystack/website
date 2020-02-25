import React from "react";
import ReactDOM from "react-dom";
import GoogleAnalytics from "./hooks/useGoogleAnalytics";
import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import Reducer from "./redux/Reducer";
import Router from "./Router";
import "./index.css";
import "./styles/Interactive.css";
import "./styles/TabItem.css";
import "./styles/Animation.css";
import "./styles/Tablet.css";
import "./styles/Mobile.css";

// GoogleAnalytics.initialize({"UA-1234567890": {}});

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f, // eslint-disable-line
  ),
);

ReactDOM.render(
  (<Provider store={store}>
    <Router />
  </Provider>),
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
