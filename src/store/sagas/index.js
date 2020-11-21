import { all } from 'redux-saga/effects';

export default function* () {
  return yield all([
    // takeLatest(ProjectsTypes.GET_REQUEST, loadProjects)
  ]);
}
