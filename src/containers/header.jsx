import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "../styled";

const HeaderComponent = (props) => {
  const { history } = props;

  const goToHomePage = () => {
    history.push("/page=1");
  };

  return <Header onClick={goToHomePage}>Movio</Header>;
};

export default withRouter(HeaderComponent);
