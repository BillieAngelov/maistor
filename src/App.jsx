import React from "react";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import "./global.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";

export const App = () => {
  return (
    <Layout>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
      </Switch>
      {/* <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Main /> */}
    </Layout>
  );
};
