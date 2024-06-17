import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          {/* Components that always display */}
          <Header />
          {/* Components that always display */}
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route exact path="/surveys/new" component={SurveyNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
