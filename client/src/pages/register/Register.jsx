import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useNavigate();

  //onSubmit function
  const handleClick = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      return confirmPassword.current.setCustomValidity(
        "Passwords does not match."
      );
    }

    let user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios.post("/auth/signup", user);
      history("/login");
    } catch (err) {
      console.log("register error", err.message);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Gosocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Gosocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              ref={username}
              type="text"
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Password Again"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
