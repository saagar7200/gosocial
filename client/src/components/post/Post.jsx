import "./post.css";
import { MoreVert, Favorite, FavoriteBorder } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(
    false || post.likes.includes("63f260ba86789794216ba72c")
  );
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  //fetch user

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`user/${post.userId}`);
      console.log(res.data);
      setUser(res.data);
    };

    fetchUsers();
  }, [post.userId]);

  //handle like dislike

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || `${PF}/person/no_profile.jpg`}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>

            <span className="postDate">{post?.date}</span>
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
