import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { PaginationWrap } from "../styled";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationRounded = (props) => {
  const { MovieStore, history } = props;
  const classes = useStyles();

  const switchPage = (event, value) => {
    MovieStore.switchPage(value);
    history.push(`/page=${MovieStore.pagination.currentPage}`);
  };

  return (
    <PaginationWrap className={classes.root}>
      <Pagination
        count={MovieStore.pagination.totalPages}
        variant="outlined"
        shape="rounded"
        page={MovieStore.pagination.currentPage}
        onChange={switchPage}
      />
    </PaginationWrap>
  );
};

export default withRouter(inject("MovieStore")(observer(PaginationRounded)));
