import { action, observable, makeObservable } from "mobx";
import { API_SERVICE } from "../services/api";
import { MAX_TOTAL_PAGE } from "../utils/constants";

class MovieStore {
  constructor() {
    makeObservable(this, {
      movies: observable,
      genres: observable,
      movie: observable,
      loading: observable,
      pagination: observable,
      getAllMovies: action,
      getMovieByID: action,
      getGenresList: action,
      switchPage: action,
    });
  }

  pagination = {
    totalPages: null,
    currentPage: sessionStorage.getItem("currentPage") || 1,
  };

  movies = [];

  genres = [];

  movie = {};

  loading = {
    loadingMovies: false,
    loadingGenres: false,
    gettingMovie: false,
  };

  getAllMovies = () => {
    this.loading.loadingMovies = true;

    return API_SERVICE.getMovies(this.pagination.currentPage)
      .then(({ data }) => {
        this.movies = data.results;
        this.pagination.totalPages =
          data.total_pages >= MAX_TOTAL_PAGE
            ? MAX_TOTAL_PAGE
            : data.total_pages;
        this.pagination.currentPage = data.page;
      })
      .catch((err) => console.log(err))
      .finally(() => (this.loading.loadingMovies = false));
  };

  getGenresList = () => {
    this.loading.loadingGenres = true;

    return API_SERVICE.getGenres()
      .then(({ data }) => {
        this.genres = data.genres;
      })
      .catch((err) => console.log(err))
      .finally(() => (this.loading.loadingGenres = false));
  };

  getMovieByID = (id) => {
    this.loading.gettingMovie = true;

    return API_SERVICE.getMovieById(id)
      .then(({ data }) => {
        this.movie = data;
      })
      .catch((err) => console.log(err))
      .finally(() => (this.loading.gettingMovie = false));
  };

  switchPage = (page) => {
    sessionStorage.setItem("currentPage", page);
    this.pagination.currentPage = page;
  };
}

export default new MovieStore();
