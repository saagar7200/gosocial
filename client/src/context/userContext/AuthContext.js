import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63f260ba86789794216ba72c",
    username: "Sagar Bhandari",
    email: "sagarb@gmail.com",
    password: "$2b$10$0u8YHx6B8etm3wk.pGrhT.eiguYoox0iL78VY3yL4cOg8X1ZAAOx.",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: "2023-02-19T17:47:38.664Z",
    updatedAt: "2023-03-01T07:04:04.435Z",
    __v: 0,
    desc: "Hello,welcome to my timeline stranger.",
    from: "Dang",
    relationship: 1,
    currentCity: "Lalitpur",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
