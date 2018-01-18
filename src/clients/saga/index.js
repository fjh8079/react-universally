/* eslint-disable no-console */
import { all, fork } from 'redux-saga/effects';
import { watchSearchMovie } from './movie';

export default function* rootSaga() {
  yield all([
    fork(watchSearchMovie),
  ]);
}
