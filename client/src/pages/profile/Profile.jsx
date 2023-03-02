import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  const username = useParams().username;

  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  //fetch user

  useEffect(() => {
    //create a controller

    let controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const res = await axios.get(`/user?username=${username}`, {
          signal: controller.signal,
        });
        setUser(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchUsers();

    return () => controller?.abort();
  }, [username]);

  return (
    <>
      <Topbar />

      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || `${PF}/person/no_cover.png`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || `${PF}/person/no_profile.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
