import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  CancelOutlined,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/userContext/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { getPost } from "../../apiCalls";
import { PostContext } from "../../context/postContext/PostContext";

const Share = ({ username }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const postTxt = useRef();
  const { dispatch } = useContext(PostContext);

  const handleChangeFile = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.set("desc", postTxt.current.value);
    postData.set("userId", user._id);
    postData.set("img", file);

    try {
      await axios.post(`/post`, postData, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data`,
        },
      });
      postTxt.current.value = "";
      setFile(null);
      getPost(username, user._id, dispatch);
    } catch (err) {}
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
        {file && (
          <div className="previewContainer">
            <img className="previewImage" src={file} alt="preview" />
            <CancelOutlined className="cancel" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={handlePost}>
          <div className="shareOptions">
            <label className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type={"file"}
                onChange={handleChangeFile}
                multiple={false}
              />
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
