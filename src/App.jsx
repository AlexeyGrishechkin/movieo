import React from "react";
import { MainWrapper } from "./styled";
import HomePage from "./containers/homepage";
import { Route, Switch } from "react-router-dom";
import { HOME_PAGE } from "./utils/routes";
import HeaderComponent from "./containers/header";

const App = () => {
  return (
    <MainWrapper>
      <HeaderComponent />
      <Switch>
        <Route path={HOME_PAGE} component={HomePage} />
      </Switch>
    </MainWrapper>
  );
};

export default App;
