import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { MainRouter } from "./MainRouter";

// import { Alerts } from "../components/Alerts/Alerts";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          path="/auth"
          component={AuthRouter}
        />

        <Route 
          path="/"
          component={MainRouter}
        />

      </Switch>
    </BrowserRouter>
  );
};
