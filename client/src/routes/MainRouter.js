import React from "react";
import { Switch, Route } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { About } from "../pages/main/About";
import { Activities } from "../pages/main/Activities";
import { Contacts } from "../pages/main/Contacts";
import { Contribute } from "../pages/main/Contribute";
import { Home } from "../pages/main/Home";
import { News } from "../pages/main/News";
import { NotFound } from "../pages/main/NotFound";
import { Novelties } from "../pages/main/Novelties";
import { Testimonials } from "../pages/main/Testimonials";
import { User } from "../pages/main/User";

export const MainRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/news" component={News} />
        <Route exact path="/novelties" component={Novelties} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/contribute" component={Contribute} />
        <Route exact path="/user" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};
