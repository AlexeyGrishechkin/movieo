import React, { useEffect } from "react";
import { Genre, Movie, MovieName, Movies, Poster } from "../styled";
import { IMG_URL } from "../utils/constants";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { RatingFilm } from "../components/raitingFilm";
import PaginationRounded from "../components/pagination";
import { useLocation } from "react-router-dom";
import { Loader } from "../components/loader";

const Homepage = (props) => {
  const { MovieStore, history } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    MovieStore.getGenresList();
  }, []);

  useEffect(() => {
    MovieStore.getAllMovies();
    MovieStore.movies && window.scrollTo(0, 0);
  }, [pathname]);

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
            {renderGenres(movie.release_date, movie.genre_ids)}
          </div>
        </Movie>
      );
    });
  };

  const renderGenres = (releaseDate, hasGenre) => {
    const genreList = MovieStore.genres
      .filter((genre) => hasGenre.indexOf(genre.id) !== -1)
      .map((genre) => genre.name)
      .join(", ");

    return (
      <Genre>
        {moment(releaseDate).format("YYYY")} - {genreList}
      </Genre>
    );
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
