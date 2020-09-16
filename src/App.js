import { auth } from "./firebase";
import React, { useEffect } from "react";
import "./App.css";
import Greeting from "./Greeting/Greeting";
import Home from "./Home/Home";

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const greeting = document.querySelector(".app__greeting");
        greeting.classList.remove("show");
      } else {
        console.log("no");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="App">
      <div className="app__greeting show">
        <Greeting />
      </div>
      <div className="app__home">
        <Home />
      </div>
    </div>
  );
}
export default App;
