import React from "react";
import './styles/main.css'
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

function App() {

  return (
    <div className="container">
      <Header/>
      <Scoreboard/>
      <Gameboard/>
    </div>
  );
}

export default App;
