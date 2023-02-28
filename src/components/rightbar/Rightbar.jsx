import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = () => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/bithday.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="RightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dang</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Dang,Deukhuri</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="RightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <HomeRightbar /> */}
        <ProfileRightbar />
      </div>
    </div>
  );
};

export default Rightbar;
