import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect } from "react";
// import axios from "axios";
import { AuthContext } from "../../context/userContext/AuthContext";
import { useLocation } from "react-router-dom";
import { getPost } from "../../apiCalls";
import { PostContext } from "../../context/postContext/PostContext";
import { CircularProgress } from "@material-ui/core";

export default function Feed({ username }) {
  // const [posts, setPosts] = useState(post || []);
  // const [error, setError] = useState({});
  const { user } = useContext(AuthContext);

  const { posts, dispatch, isFetching } = useContext(PostContext);
  const location = useLocation();

  const paramsUsername = decodeURI(location.pathname.split("/")[2]);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   try {
    //     const res = username
    //       ? await axios.get(`/post/get_user_all_post/${username}`)
    //       : await axios.get("post/timeline/" + user._id);
    //     setPosts(
    //       res.data.sort(
    //         (p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)
    //       )
    //     );
    //   } catch (e) {
    //     setError(e.message);
    //   }
    // };
    // fetchPosts();
    getPost(username, user._id, dispatch);
  }, [dispatch, user._id, username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || user.username === paramsUsername) && (
          <Share username={username} />
        )}
        {isFetching ? (
          <CircularProgress color="primary" className="loader" />
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
}
