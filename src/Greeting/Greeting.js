import React, { useEffect, useState } from "react";
import "./Greeting.css";
import Button from "@material-ui/core/Button";
import FormUser from "./FormUser/FormUser";
import { auth } from "../firebase";

function Greeting() {
  const [btnClick, setBtnClick] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <div className="greeting">
      <div className="greeting__title">
        <strong>YourPlan</strong>
        <p>Let's keep your plan</p>
        <p>on its successful path</p>
      </div>

      <div className="greeting__button">
        {!btnClick ? (
          <>
            <div className="greeting__buttonSignUp">
              <p>Are you new?</p>
              <p>Let's sign up</p>
              <Button
                onClick={() => setBtnClick("signUp")}
                className="buttonStyle signUpStyle"
              >
                Register
              </Button>
            </div>
            <div className="greeting__buttonSignIn">
              <p>Or you have an</p>
              <p>account already?</p>
              <Button
                onClick={() => setBtnClick("signIn")}
                className="buttonStyle signInStyle"
              >
                Sign In
              </Button>
            </div>
          </>
        ) : (
          <>
            <FormUser stateClick={btnClick} />

            <Button
              onClick={() => setBtnClick()}
              className="buttonStyle backStyle"
            >
              Back
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Greeting;
