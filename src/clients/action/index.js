import { DUMMY_ACTION, MOVIE_ACTION } from '../../constants';

function dummyAction() {
  return {
    type: DUMMY_ACTION,
  };
}

function onSearchMoviesAction(keyword) {
  return {
    type: MOVIE_ACTION.ON_SEARCH_MOVIES,
    payload: keyword,
  };
}

function onGetSearchMovies(res) {
  return {
    type: MOVIE_ACTION.GET_SEARCH_MOVIES,
    payload: res,
  };
}

module.exports = {
  dummyAction,
  onSearchMoviesAction,
  onGetSearchMovies,
};

