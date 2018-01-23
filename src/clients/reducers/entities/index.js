/* eslint-disable no-console */
import update from 'immutability-helper';
import { normalize } from 'normalizr';
import movieListSchema from '../../schemas';
import { MOVIE_ACTION } from '../../../constants';

const initialState = {
  entities: {},
  result: [],
};

export default function entitiesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_ACTION.GET_SEARCH_MOVIES: {
      const movieResults = normalize(action.payload.results, [movieListSchema]);
      return update(state, {
        entities: {
          $merge: movieResults.entities,
        },
        result: {
          $push: movieResults.result,
        },
      });
    }
    default:
      return state;
  }
}
