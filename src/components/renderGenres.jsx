import React from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { Genre } from "../styled";
import { createGenreList } from "../utils/helpers/createGenreList";

const RenderGenres = (props) => {
  const { MovieStore, releaseDate, filmGenres } = props;

  return (
    <Genre>
      {moment(releaseDate).format("YYYY")} -{" "}
      {createGenreList(MovieStore.genres, filmGenres)}
    </Genre>
  );
};

export default inject("MovieStore")(observer(RenderGenres));
