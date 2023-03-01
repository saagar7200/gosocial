import "./post.css";
import { MoreVert, Favorite, FavoriteBorder } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const { user: currUser } = useContext(AuthContext);

  const [like, setLike] = useState(post.likes.length);

  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  //check if post already liked by user or not

  useEffect(() => {
    setIsLiked(post.likes.includes(currUser._id));
  }, [currUser._id, post.likes]);

  //fetch user

  useEffect(() => {
    //create a controller

    let controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`/user?userId=${post.userId}`, {
          signal: controller.signal,
        });
        setUser(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchUsers();
    return () => controller?.abort();
  }, [post.userId]);

  //handle like dislike

  const handleLike = async () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked((prev) => !prev);
    try {
      axios.put("/post/" + post._id + "/like", { userId: currUser._id });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || `${PF}/person/no_profile.jpg`}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>

            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post?.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {!isLiked ? (
              <FavoriteBorder onClick={handleLike} className="likeIcon" />
            ) : (
              <Favorite
                htmlColor="red"
                onClick={handleLike}
                className="likeIcon"
              />
            )}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
