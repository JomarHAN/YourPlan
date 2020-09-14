import React from "react";
import "./FormUser.css";
import { TextField, FormControl, Button } from "@material-ui/core";

function FormUser({ stateClick }) {
  return (
    <div className="formUser">
      {stateClick === "signUp" ? (
        <div className="formUser__frame yellow">
          <div className="formUser__frameTitle">Registration</div>
          <form className="formControl">
            <FormControl>
              <TextField
                className="textField"
                label="User Name"
                type="text"
                variant="outlined"
              />
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
              <Button className="buttonStyle signUpStyle">Sign Up</Button>
            </FormControl>
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
          </form>
        </div>
      )}
    </div>
  );
}

export default FormUser;
