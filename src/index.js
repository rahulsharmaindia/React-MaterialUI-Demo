import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import UserDetails from "./containers/UserDetails";

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user/:userId/" component={UserDetails}/>
    </Switch>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));
