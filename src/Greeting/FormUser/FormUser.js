import React, { useState } from "react";
import "./FormUser.css";
import { TextField, FormControl, Button } from "@material-ui/core";
import SocialLogin from "./SocialLogin/SocialLogin";
import { auth } from "../../firebase";

function FormUser({ stateClick }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })

      .catch((error) => alert(error.message));
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => alert(error.message));
    setUsername("");
    setPassword("");
    setEmail("");
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
                type="email"
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
                type="submit"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="textField"
                label="Email"
                type="email"
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
                onClick={handleSignIn}
                className="buttonStyle signInStyle"
                type="submit"
              >
                Sign In
              </Button>
            </FormControl>
            <SocialLogin />
          </form>
        </div>
      )}
    </div>
  );
}

export default FormUser;
