import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainWrapper } from "./styled";
import HomePage from "./containers/homepage";
import MovieDescription from "./containers/movieDescription";
import HeaderComponent from "./containers/header";
import { HOME_PAGE, MOVIE_DETAILS } from "./utils/routes";

const App = () => (
  <MainWrapper>
    <HeaderComponent />
    <Switch>
      <Route path={MOVIE_DETAILS} component={MovieDescription} />
      <Route path={HOME_PAGE} component={HomePage} />
    </Switch>
  </MainWrapper>
);

export default App;
