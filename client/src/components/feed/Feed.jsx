import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get(`/post/get_user_all_post/${username}`)
          : await axios.get("post/timeline/63f260ba86789794216ba72c");
        setPosts(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
