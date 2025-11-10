import React from "react";
import logo from "../../assets/dotwork-logo.svg";
import googleLogo from "../../assets/google-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "./AuthPage.css";
const AuthPage = () => {
  return (
    <div className="big">
      <div className="auth-page-container">
        <div className="brand-name-div">
          <img src={logo} alt="logo svg" />
          <p>dotwork</p>
        </div>
        <h1 className="header">Create your Account</h1>
        <div className="oauth-div">
          <button>
            <img src={googleLogo} /> Google
          </button>
          <button>
            <img src={facebookLogo} />
            Facebook
          </button>
        </div>
        <div className="email-divider">
          <hr className="email-line" />
          <p>or continue with email</p>
          <hr className="email-line" />
        </div>
        <div className="form-container">
          <div className="input-div-auth">
            <Mail className="icon-auth" />
            <input type="email" name="Email" placeholder="Email" />
          </div>
          <div className="input-div-auth">
            <Lock className="icon-auth" />
            <input type="password" name="Password" placeholder="Password" />
          </div>
        </div>
        <div className="options-div">
          <div className="remember-me">
            <input type="checkbox" name="Remember me" width={"50px"} />
            <label htmlFor="Remember me"> Remember me</label>
          </div>
          <p>
            <a href="/">Forgot Password?</a>
          </p>
        </div>
        <div className="action-div">
          <button className="create-button">Create</button>
          <p className="login-link">
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
