import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "materialize-css/dist/css/materialize.min.css";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
