// create Redux action types
export const GET_POSTS = "GET_POSTS";
// GET_POSTS telling Redux that we are going to fetch posts from an API
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// GET_POSTS_SUCCESS passing the posts to Redux on the successful API call
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
// GET_POSTS_FAILURE informing redux that an error was encountered during Redux on failed API call

// create action creators, which are functions that return an action
// which consists of the type and an optional payload loading data

export const getPosts = () => {
  type: GET_POSTS;
};

export const getPostsSuccess = (Post) => {
  type: GET_POSTS_SUCCESS;
  payload: posts;
};

export const getPostsFailure = () => {
  type: GET_POSTS_FAILURE;
};
