import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '~/services/Api';
import { FavoritesTypes, FavoritesActions } from '~/store/ducks/favourites';
import { showErrorMessage } from '~/components/Notifier/actions';

function* loadMovies() {
  try {
    console.tron.log('GETTINg...');
    const response = yield call(Api.getFavoriteMovies);
    console.tron.log(response);
    const { items } = response.data;

    yield put(FavoritesActions.loadMoviesSuccess(items));
  } catch (e) {
    showErrorMessage('Error getting the movies');
    console.tron.errors(e);
  }
}

export default [
  takeLatest(FavoritesTypes.LOAD_MOVIES_REQUEST, loadMovies)
];
