import * as actions from "../actions/postActions";

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

// For each action, we’ll make a case, that returns the entire
// State plus whatever change we’re making to it

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
