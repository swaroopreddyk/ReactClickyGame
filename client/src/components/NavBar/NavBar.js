import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li>
        <a href="/">Marvel Memory Game</a>
      </li>
      <li
        className={
          props.message.indexOf("incorrectly") !== -1
            ? "desc-incorrect"
            : props.message.indexOf("correctly") !== -1
            ? "desc-correct"
            : "desc-normal"
        }
      >
        {props.message}
      </li>
      <li>
        Score: <span style={{ color: "#36FF80" }}>{props.currentScore}</span> |
        Top Score: <span style={{ color: "yellow" }}>{props.topScore}</span>
      </li>
    </ul>
  </div>
);

export default NavBar;
