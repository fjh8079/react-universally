/* eslint-disable no-console */
// import { takeEvery } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { MOVIE_ACTION } from '../../constants';
import { getSearchMovie } from '../../api/movie';

function* searchMovieFlow(action) {
  console.log('searchMovieFlow');
  try {
    const movies = yield call(getSearchMovie, action.payload);
    console.log('movies', movies);
    yield put({ type: MOVIE_ACTION.GET_SEARCH_MOVIES, payload: movies });
  } catch (error) {
    console.log('searchMovieFlow error', error);
  }
}


function* watchSearchMovie() {
  yield takeEvery(MOVIE_ACTION.ON_SEARCH_MOVIES, searchMovieFlow);
}

module.exports = {
  watchSearchMovie,
};
