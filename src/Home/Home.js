import { Button } from "@material-ui/core";
import React from "react";
import { auth } from "../firebase";
import "./Home.css";

function Home() {
  const handleSignOut = () => {
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
      <h1>Welcome here</h1>
      <Button onClick={handleSignOut} className="buttonStyle backStyle">
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
