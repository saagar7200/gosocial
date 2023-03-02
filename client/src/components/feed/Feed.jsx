import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({});
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const usename = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get(`/post/get_user_all_post/${username}`)
          : await axios.get("post/timeline/" + user._id);
        setPosts(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchPosts();
  }, [user._id, username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {user.username === username && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
