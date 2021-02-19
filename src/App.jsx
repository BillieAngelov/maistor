import React from "react";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import "./global.css";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Main />
    </Layout>
  );
};
