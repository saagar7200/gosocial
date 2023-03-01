import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={PF + "person/1.jpeg" || `${PF}/person/no_profile.jpg`}
            alt=""
            className="shareImg"
          />
          <input
            placeholder="What's in your mind saagar?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
