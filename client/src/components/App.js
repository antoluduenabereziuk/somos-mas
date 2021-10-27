import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Activities } from "../pages/Activities";
import { Novelties } from "../pages/Novelties";
import { Testimonials } from "../pages/Testimonials";
import { Contacts } from "../pages/Contacts";
import { Contribute } from "../pages/Contribute";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/novelties" component={Novelties} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};