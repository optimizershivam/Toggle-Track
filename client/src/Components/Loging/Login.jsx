import React, { useState } from "react";
import logstyle from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Login = () => {
  
  
  return (
    <div className={logstyle.cont}>
      <div className={logstyle.wrap}></div>
      <div className={logstyle.centered}>
        <h3 className={logstyle.h2log}>Log in to your account</h3>
        <h3 className={logstyle.h3log}>Let's get Tracking!</h3>
      </div>

      <div className={logstyle.main}>
        <form>
          <div className={logstyle.top}>
            <button type="submit" className={logstyle.google}>
              {" "}
              <img
                className={logstyle.googleimg}
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="google"
              />
              Signup via Google
            </button>
            <button className={logstyle.google}>
              {" "}
              <img
                className={logstyle.googleimg}
                src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
                alt="apple"
              />{" "}
              Sign up via Apple
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className={logstyle.forms}>
            <label>Email </label>
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
             
            />{" "}
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
           
            />
          </div>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className={logstyle.forgot}>Forgot Password?</span>
          </div>
          <br />
          <div>
            <button
              type="submit"
              
              className={logstyle.btn2log}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className={logstyle.bottom}>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className={logstyle.linkbutton}>Sign up for free</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
