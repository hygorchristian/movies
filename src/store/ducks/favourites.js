import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadMoviesRequest: null,
  loadMoviesSuccess: ['movies'],
  loadMoviesFailure: ['error'],
  loadShowsRequest: null,
  loadShowsSuccess: ['tvShows'],
  loadShowsFailure: ['error'],
  loadMoreMoviesRequest: null,
  loadMoreShowsRequest: null,
  addMovies: ['movies'],
  addShows: ['tvShows'],
  setMovieGenres: ['movieGenres'],
  setShowGenres: ['showGenres'],
  setSelected: ['selected']
}, { prefix: 'FAVOURITES/' });

export const FavoritesTypes = Types;
export const FavoritesActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  movies: [],
  tvShows: [],
  loading: false,
  error: null,
  movieGenres: [],
  showGenres: [],
  selected: 'movies'
});

// Reducer Functions

const loadMoviesRequest = (state) => ({ ...state, loading: true, error: null });

const loadMoviesSuccess = (state, { movies }) => ({
  ...state, movies, loading: false, error: null
});

const loadMoviesFailure = (state, { error }) => ({
 ...state, error, loading: false
});

const loadShowsRequest = (state) => ({ ...state, loading: true, error: null });

const loadShowsSuccess = (state, { tvShows }) => ({
  ...state, tvShows, loading: false, error: null
});

const loadShowsFailure = (state, { error }) => ({
 ...state, error, loading: false
});

const addMovies = (state, { movies }) => ({ ...state, movies: [...state.movies, ...movies] });

const addShows = (state, { tvShows }) => ({ ...state, tvShows: [...state.tvShows, ...tvShows] });

const setMovieGenres = (state, { movieGenres }) => ({ ...state, movieGenres });

const setShowGenres = (state, { showGenres }) => ({ ...state, showGenres });

const setSelected = (state, { selected }) => ({ ...state, selected });

// Reducer

export const FavoritesReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_MOVIES_REQUEST]: loadMoviesRequest,
  [Types.LOAD_MOVIES_SUCCESS]: loadMoviesSuccess,
  [Types.LOAD_MOVIES_FAILURE]: loadMoviesFailure,
  [Types.LOAD_SHOWS_REQUEST]: loadShowsRequest,
  [Types.LOAD_SHOWS_SUCCESS]: loadShowsSuccess,
  [Types.LOAD_SHOWS_FAILURE]: loadShowsFailure,
  [Types.LOAD_MORE_MOVIES_REQUEST]: loadMoviesRequest,
  [Types.LOAD_MORE_SHOWS_REQUEST]: loadShowsRequest,
  [Types.ADD_MOVIES]: addMovies,
  [Types.ADD_SHOWS]: addShows,
  [Types.SET_MOVIE_GENRES]: setMovieGenres,
  [Types.SET_SHOW_GENRES]: setShowGenres,
  [Types.SET_SELECTED]: setSelected,
});
