import React from "react";
import { MainWrapper } from "./styled";
import HomePage from "./containers/homepage";
import { Route, Switch } from "react-router-dom";
import { HOME_PAGE, MOVIE_DETAILS } from "./utils/routes";
import MovieDescription from "./containers/movieDescription";
import HeaderComponent from "./containers/header";

const App = () => {
  return (
    <MainWrapper>
      <HeaderComponent />
      <Switch>
        <Route path={MOVIE_DETAILS} component={MovieDescription} />
        <Route path={HOME_PAGE} component={HomePage} />
      </Switch>
    </MainWrapper>
  );
};

export default App;
