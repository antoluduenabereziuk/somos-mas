import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/auth/Login";
export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact to="/auth/login" component={Login} />

      <Route exact to="/auth/register" />

      <Redirect to="/auth/login" />
    </Switch>
  );
};
