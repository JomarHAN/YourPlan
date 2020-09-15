import React from "react";
import "./SocialLogin.css";

function SocialLogin() {
  return (
    <div className="sociallogin">
      <p>or</p>
      <p>Sign in with:</p>
      <div className="sociallogin__icon">
        <div className="general">
          <div className="general__fb"></div>
        </div>
        <div className="general">
          <div className="general__google"></div>
        </div>
        <div className="general">
          <div className="general__twitter"></div>
        </div>
      </div>
    </div>
  );
}

export default SocialLogin;
