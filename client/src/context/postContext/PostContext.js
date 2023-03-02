import { createContext, useReducer } from "react";
import { PostReducer } from "./Postreducer";

const INITIAL_STATE = {
  post: [],
  error: false,
  isFetching: false,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        posts: state.post,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
