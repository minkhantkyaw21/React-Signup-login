import React, { useState } from "react";
import "./LoginSignup.css";

import userIcon from "../Assests/user_icon.png";
import emailIcon from "../Assests/email_icon.png";
import passwordIcon from "../Assests/password_icon.png";
const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={userIcon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        
        <div className="input">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<></>:<div className="forgot-password">
        Lost password? <span>Click Here</span>
      </div>}
      
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
