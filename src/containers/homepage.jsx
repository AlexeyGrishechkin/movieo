import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Movie, MovieName, Movies, Poster } from "../styled";
import PaginationRounded from "../components/pagination";
import { Loader } from "../components/loader";
import RenderGenres from "../components/renderGenres";
import { RatingFilm } from "../components/raitingFilm";
import { IMG_URL } from "../utils/constants";

const Homepage = (props) => {
  const { MovieStore, history } = props;
  const urlPage = history.location.pathname.split("=")[1];

  useEffect(() => {
    MovieStore.getGenresList();
  }, []);

  useEffect(() => {
    MovieStore.switchPage(urlPage);
    MovieStore.getAllMovies();
    MovieStore.movies && window.scrollTo(0, 0);
  }, [history.location.pathname]);

  const renderMovie = () => {
    return MovieStore.movies.map((movie) => {
      return (
        <Movie key={movie.id}>
          <Poster
            src={IMG_URL + movie.poster_path}
            alt={movie.title}
            onClick={() => history.push(`/movie-details/${movie.id}`)}
          />
          <div>
            <RatingFilm rating={movie.vote_average} />
            <MovieName>{movie.title}</MovieName>
            <RenderGenres
              releaseDate={movie.release_date}
              hasGenre={movie.genre_ids}
            />
          </div>
        </Movie>
      );
    });
  };

  return (
    <>
      {MovieStore.loading.loadingMovies ? (
        <Loader />
      ) : (
        <>
          <Movies>{renderMovie()}</Movies>
          <PaginationRounded totalPage={MovieStore.totalPages} />
        </>
      )}
    </>
  );
};

export default inject("MovieStore")(observer(Homepage));
