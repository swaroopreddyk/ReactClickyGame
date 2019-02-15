import React from "react";
import "./Title.css";

const Title = props => (
  <div className="titlebox">
    <h1>Marvel's Memory Game</h1>
    <p>
      {" "}
      Click on a Marvel character to earn points. The game ends when you click
      on the same Marvel character more than once !!!{" "}
    </p>
  </div>
);

export default Title;
