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

module.exports = {
  dummyAction,
  onSearchMoviesAction,
};

