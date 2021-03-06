import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../contextAPI/StateProvider";
import { auth } from "../firebase";
import "./Home.css";

function Home() {
  const [{ userDisplay }] = useStateValue();

  const handleSignOut = (e) => {
    e.preventDefault()
    auth.signOut();
    const greeting = document.querySelector(".app__greeting");
    greeting.classList.add("dropDown");
    greeting.addEventListener("animationend", () => {
      greeting.classList.remove("dropDown");
      greeting.classList.add("show");
    });
  };
  return (
    <div className="home">
      <h1>Welcome here {userDisplay}</h1>
      <Button onClick={handleSignOut} className="buttonStyle backStyle" type="submit">
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
