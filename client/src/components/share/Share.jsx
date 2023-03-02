import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  const postTxt = useRef();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/post`, {
        desc: postTxt.current.value,
        userId: user._id,
      });
    } catch (err) {
      console.log("share post ", err.message);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture || `${PF}/person/no_profile.jpg`}
              alt=""
              className="shareImg"
            />
          </Link>
          <input
            ref={postTxt}
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handlePost}>
          <div className="shareOptions">
            <label className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input style={{ display: "none" }} type={"file"} />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
