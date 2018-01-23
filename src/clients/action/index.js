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

function onAddToSelected(id) {
  return {
    type: MOVIE_ACTION.ADD_TO_SELECTED,
    payload: id,
  };
}

module.exports = {
  dummyAction,
  onSearchMoviesAction,
  onGetSearchMovies,
  onAddToSelected,
};

