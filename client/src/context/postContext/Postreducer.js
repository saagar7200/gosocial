export const PostReducer = (state, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case "POST_REQUEST_START":
      return {
        isFetching: true,
        error: false,
        post: [],
      };
    case "POST_REQUEST_SUCCESS":
      return {
        isFetching: false,
        error: "run here",
        post: action.payload,
      };
    case "POST_REQUEST_FAILURE":
      return {
        isFetching: false,
        error: action.payload,
        post: [...state.post],
      };
    default:
      return state;
  }
};
