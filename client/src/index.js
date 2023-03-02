import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostContextProvider } from "./context/postContext/PostContext";
import { AuthContextProvider } from "./context/userContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </PostContextProvider>
  </React.StrictMode>
);
