import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { inject, observer } from "mobx-react";
import { PaginationWrap } from "../styled";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationRounded = (props) => {
  const { MovieStore } = props;
  const classes = useStyles();

  const switchPage = (e, value) => {
    // console.log({ e, value });
    MovieStore.switchPage(value);
    props.history.push(`/page=${MovieStore.pagination.currentPage}`);
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
