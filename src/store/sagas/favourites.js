import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '~/services/Api';
import { FavoritesTypes, FavoritesActions } from '~/store/ducks/favourites';
import { showErrorMessage } from '~/components/Notifier/actions';

function* loadMovies() {
  try {
    const response = yield call(Api.getAllMovies);
    const { items } = response.data;
    yield put(FavoritesActions.loadMoviesSuccess(items));

    const genresIds = new Set();
    items.forEach((item) => item?.genre_ids?.forEach((genre) => genresIds.add(genre)));

    const responseGenres = yield call(Api.getAllGenres);
    const { genres } = responseGenres.data;

    const genresList = genres.filter((genre) => genresIds.has(genre.id));

    yield put(FavoritesActions.setMovieGenres(genresList));
  } catch (e) {
    showErrorMessage('Error getting the movies');
    console.tron.errors(e);
  }
}
function* loadTVShows() {
  try {
    const response = yield call(Api.getAllShows);
    const { items } = response.data;
    yield put(FavoritesActions.loadShowsSuccess(items));

    const genresIds = new Set();
    items.forEach((item) => item?.genre_ids?.forEach((genre) => genresIds.add(genre)));

    const responseGenres = yield call(Api.getAllGenres);
    const { genres } = responseGenres.data;

    const genresList = genres.filter((genre) => genresIds.has(genre.id));

    console.tron.log({ genresList });
    yield put(FavoritesActions.setShowGenres(genresList));
  } catch (e) {
    showErrorMessage('Error getting the movies');
    console.tron.errors(e);
  }
}

export default [
  takeLatest(FavoritesTypes.LOAD_MOVIES_REQUEST, loadMovies),
  takeLatest(FavoritesTypes.LOAD_SHOWS_REQUEST, loadTVShows)
];
