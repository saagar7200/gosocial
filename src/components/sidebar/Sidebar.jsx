import "./sidebar.css";
import {
  RssFeed,
  Chat,
  School,
  Event,
  WorkOutline,
  HelpOutline,
  Bookmark,
  Group,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";
import Friend from "../friend/Friend";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sibarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sibarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sibarListItemText">Chats</span>
          </li>{" "}
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sibarListItemText">Videos</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sibarListItemText">Groups</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sibarListItemText">Bookmarks</span>
          </li>{" "}
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sibarListItemText">Questions</span>
          </li>{" "}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sibarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sibarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sibarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
