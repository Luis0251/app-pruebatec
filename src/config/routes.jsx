import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import {Home} from "../pages/Home";
import {Catalog} from "../pages/Catalog";
import {Detail} from "../pages/Detail";
const Rutas = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export  {Rutas};
