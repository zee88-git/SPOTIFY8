import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO zee's SPOTIFY</a>
    </div>
  );
}

export default Login;
