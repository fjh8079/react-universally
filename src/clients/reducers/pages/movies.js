/* eslint-disable no-console */
import update from 'immutability-helper';
import { MOVIE_ACTION } from '../../../constants';

const initialState = {
  keyword: '',
  searchResult: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_ACTION.ON_SEARCH_MOVIES:
      return update(state, {
        $set: {
          keyword: action.payload,
        },
      });
    case MOVIE_ACTION.GET_SEARCH_MOVIES:
      return update(state, {
        searchResult: {
          $set: action.payload.results,
        },
      });
    default:
      return state;
  }
}
