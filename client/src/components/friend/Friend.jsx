import "./friend.css";

const Friend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img src={user.Profile} alt="jane Doe" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default Friend;
