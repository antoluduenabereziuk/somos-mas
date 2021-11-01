<<<<<<< HEAD
import React from 'react';
import {Switch, Route } from "react-router-dom";
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
;

export const AuthRouter = () => {
    return (
        <Switch>
            
            <Route 
                exact
                path="/auth/login"
                component={Login}
            />

            <Route 
                exact
                path="/auth/register"
                component={Register}
            />

        </Switch>
    )
}
=======
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/Login";
export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact to="/auth/login" component={Login} />

      <Route exact to="/auth/register" />

      <Redirect to="/auth/login" />
    </Switch>
  );
};
>>>>>>> 239145ca3490f69665eb013df36f736d1c0e17f0
