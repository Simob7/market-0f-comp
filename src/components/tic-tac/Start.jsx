import React, { useContext } from "react";
import Xicon from "./icons/Xicon";
import Oicon from "./icons/Oicon";
import { GameContext } from "./contextApi/GameContext";

const Start = () => {
  const { activeUser, changePlayMode, setActiveUser, xnext, changeXnext } =
    useContext(GameContext);
  return (
    <div className="start">
      <div className="start-header">
        <span style={{ marginRight: "10px", display: "flex" }}>
          <Xicon onClick={() => setActiveUser("x")} />{" "}
          <Oicon onClick={() => setActiveUser("o")} />
        </span>{" "}
        GAME
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">pick player 1`st mark</h1>
        <div className="start-players">
          <span
            onClick={() => setActiveUser("x")}
            className={activeUser === "x" ? "start-players--active" : ""}>
            <Xicon />
          </span>
          <span
            onClick={() => setActiveUser("o")}
            className={activeUser === "o" ? "start-players--active" : ""}>
            <Oicon />
          </span>
        </div>
        <p className="text-light text-lg">remember: {activeUser} goes first</p>
      </div>
      <div className="start-btns">
        <button
          className="btn btn-yellow"
          onClick={() => changePlayMode("cpu")}>
          new game (vs cpu)
        </button>
        <button className="btn btn-blue" onClick={() => changePlayMode("user")}>
          new game (vs player)
        </button>
      </div>
    </div>
  );
};

export default Start;
