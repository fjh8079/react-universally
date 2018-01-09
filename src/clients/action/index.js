import { DUMMY_ACTION, MOVIE_ACTION } from '../../constants';

function dummyAction() {
  return {
    type: DUMMY_ACTION,
  };
}

function searchMovie(keyword) {
  return {
    type: MOVIE_ACTION.SEARCH_MOVIE,
    action: {
      payload: keyword,
    },
  };
}

module.exports = {
  dummyAction,
  searchMovie,
};

