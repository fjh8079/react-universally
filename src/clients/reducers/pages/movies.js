import update from 'immutability-helper';
import { MOVIE_ACTION } from '../../../constants';

const initialState = {
  keyword: '',
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_ACTION.ON_SEARCH_MOVIES:
      return update(state, {
        $set: {
          keyword: action.payload,
        },
      });
    default:
      return state;
  }
}
