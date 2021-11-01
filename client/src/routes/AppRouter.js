import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Activities } from "../pages/Activities";
import { News } from "../pages/News";
import { Novelties } from "../pages/Novelties";
import { Testimonials } from "../pages/Testimonials";
import { Contacts } from "../pages/Contacts";
import { Contribute } from "../pages/Contribute";
import { User } from "../pages/User";
import { NotFound } from "../pages/NotFound";
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
