import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext/AuthContext";

const Rightbar = ({ User }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  const { user } = useContext(AuthContext);

  const users_friends = user.followings.filter((followed_user) =>
    user.followers.includes(followed_user)
  );

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
            <span className="rightbarInfoKey">Current City:</span>
            <span className="rightbarInfoValue">{User.currentCity || "-"}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{User.from || "-"}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {User.relationship === 1
                ? "Single"
                : User.relationship === 2
                ? "Married"
                : "not to say" || "-"}
            </span>
          </div>
        </div>
        <h4 className="RightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {users_friends.map((friend) => {
            return (
              <div className="rightbarFollowing">
                <img
                  src={`${PF}/person/1.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Jane Carter</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {User ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
