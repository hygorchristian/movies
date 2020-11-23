import { all } from 'redux-saga/effects';

import favourites from './favourites';

export default function* () {
  return yield all([...favourites]);
}
