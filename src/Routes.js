import React from "react";
import {Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Read from "./containers/Read";
import Create from "./containers/Create";
import Update from "./containers/Update";

export default function Routes() {
  return (
    <Switch>
      /* homepage */
      <Route exact path="/vaccine-passport">
        <Homepage />
      </Route>
      /* login page */
      <Route exact path="/vaccine-passport/login">
        <Login />
      </Route>
      /* create page */
      <Route exact path="/vaccine-passport/createPassport">
        <Create />
      </Route>
      /* search page */
      <Route exact path="/vaccine-passport/readPassport">
        <Read />
      </Route>
      /* update page */
      <Route exact path="/vaccine-passport/updatePassport">
        <Update />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
