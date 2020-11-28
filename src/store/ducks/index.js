import { combineReducers } from 'redux';
import { NotistackReducer as notistack } from '~/components/Notifier/duck';
import { FavoritesReducer as favourites } from './favourites';
import { DetailReducer as detail } from './detail';

export default combineReducers({
  notistack,
  favourites,
  detail
});
