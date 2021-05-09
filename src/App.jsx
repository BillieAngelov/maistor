import React from "react";
import { Route, Switch } from "react-router-dom";

import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";
import { CreateService } from "./Pages/CreateService";

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my-services" component={CreateService} />
      </Switch>
    </Layout>
  );
};
