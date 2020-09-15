import { auth } from "./firebase";
import React, { useEffect } from "react";
import "./App.css";
import Greeting from "./Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <div className="app__greeting">
        <Greeting />
      </div>
    </div>
  );
}
export default App;
