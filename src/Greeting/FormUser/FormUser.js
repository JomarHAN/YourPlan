import React, { useState } from "react";
import "./FormUser.css";
import { TextField, FormControl, Button } from "@material-ui/core";
import SocialLogin from "./SocialLogin/SocialLogin";

function FormUser({ stateClick }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="formUser">
      {stateClick === "signUp" ? (
        <div className="formUser__frame yellow">
          <div className="formUser__frameTitle">Registration</div>
          <form className="formControl">
            <FormControl>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="textField"
                label="User Name"
                type="text"
                variant="outlined"
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="textField"
                label="Email"
                type="mail"
                variant="outlined"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="textField"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                onClick={handleRegister}
                className="buttonStyle signUpStyle"
              >
                Sign Up
              </Button>
            </FormControl>
            <SocialLogin />
          </form>
        </div>
      ) : (
        <div className="formUser__frame green">
          <div className="formUser__frameTitle">Sign In</div>
          <form className="formControl">
            <FormControl>
              <TextField
                className="textField"
                label="Email"
                type="mail"
                variant="outlined"
              />
              <TextField
                className="textField"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button className="buttonStyle signInStyle">Sign In</Button>
            </FormControl>
            <SocialLogin />
          </form>
        </div>
      )}
    </div>
  );
}

export default FormUser;
