import React from "react";
import styled from "styled-components";
//Do not remove Switch
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";

const Wrapper = styled.div``;

export const Main = () => {
  return (
      <Wrapper>
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Wrapper>
  );
};
