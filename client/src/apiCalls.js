import axios from "axios";

//login

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/signin", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.message });
  }
};

//getpost action

export const getPost = async (username, userId, dispatch) => {
  dispatch({ type: "POST_REQUEST_START" });
  try {
    const res =
      username !== undefined
        ? await axios.get(`/post/get_user_all_post/${username}`)
        : await axios.get("post/timeline/" + userId);
    console.log(
      res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt))
    );

    dispatch({
      type: "POST_REQUEST_SUCCESS",
      payload: res.data.sort(
        (p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)
      ),
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "POST_REQUEST_FAILURE",
      payload: err.message,
    });
  }
};
