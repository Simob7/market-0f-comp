import React, { useContext } from "react";
import "./tic-tac.css";

import Start from "./Start";
import Board from "./Board";
import PopUps from "./popups/PopUps";
import { GameContext } from "./contextApi/GameContext";

const Xo = () => {
  const { screen } = useContext(GameContext);
  return (
    <div className="xo">
      <div className="container">
        {/* //************************** START ********* */}
        {screen === "start" && <Start />}
        {/* //************************** board ********* */}
        {screen === "board" && <Board />}
      </div>
      <PopUps />
    </div>
  );
};

export default Xo;
