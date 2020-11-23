import { combineReducers } from 'redux';
import { NotistackReducer as notistack } from '~/components/Notifier/duck';
import { FavoritesReducer as favourites } from './favourites';

export default combineReducers({
  notistack,
  favourites
});
