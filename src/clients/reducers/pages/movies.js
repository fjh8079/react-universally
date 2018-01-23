/* eslint-disable no-console */
import update from 'immutability-helper';
import { MOVIE_ACTION } from '../../../constants';

const initialState = {
  keyword: '',
  searchResult: [],
  selectedIds: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_ACTION.ON_SEARCH_MOVIES:
      return update(state, {
        keyword: {
          $set: action.payload,
        },
      });
    case MOVIE_ACTION.GET_SEARCH_MOVIES: {
      const { results } = action.payload;
      const resultArray = results.map(movie => movie.id);
      return update(state, {
        searchResult: {
          $push: resultArray,
        },
      });
    }
    case MOVIE_ACTION.ADD_TO_SELECTED: {
      if (state.selectedIds.indexOf(action.payload) !== -1) {
        const newIds = state.selectedIds.filter(id => id !== action.payload);
        return update(state, {
          selectedIds: {
            $set: newIds,
          },
        });
      }
      return update(state, {
        selectedIds: {
          $push: [action.payload],
        },
      });
    }
    default:
      return state;
  }
}
