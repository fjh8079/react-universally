import { DUMMY_ACTION } from '../../../constants';

const initialState = {
  id: 1,
};

export default function pagesReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return state;

    default:
      return state;
  }
}
