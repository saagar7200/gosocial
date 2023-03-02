import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  try {
    dispatch({ type: "LOGIN_START" });
    const res = await axios.post("auth/signin", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.message });
  }
};
