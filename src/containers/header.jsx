import React from "react";
import { Header } from "../styled";
import { withRouter } from "react-router-dom";

const HeaderComponent = (props) => {
  const { history } = props;

  const goToHomePage = () => {
    history.goBack();
  };

  return <Header onClick={goToHomePage}>Movio</Header>;
};

export default withRouter(HeaderComponent);
