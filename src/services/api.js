import api from "./axios";

export const API_SERVICE = {
  getMovies: (page) =>
    api.get(`/discover/movie?sort_by=popularity.desc&page=${page}`),
  getGenres: () => api.get("genre/movie/list"),
  getMovieById: (id) => api.get(`/movie/${id}`),
};
