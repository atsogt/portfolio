import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/bio";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);
