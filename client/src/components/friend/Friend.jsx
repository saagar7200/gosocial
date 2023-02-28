import "./friend.css";

const Friend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLFER;

  return (
    <li className="sidebarFriend">
      <img
        src={PF + user.Profile}
        alt="jane Doe"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default Friend;
