import { FETCH_POSTS } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:

    default:
      return state;
  }
};
