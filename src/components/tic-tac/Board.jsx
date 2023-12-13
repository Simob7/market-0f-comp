import React, { useContext } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import Xicon from "./icons/Xicon";
import Oicon from "./icons/Oicon";
import BoardCard from "./BoardCard";
import { GameContext } from "./contextApi/GameContext";

const Board = () => {
  const { activeUser, squares, xnext, ties, winner, winnerLine } =
    useContext(GameContext);

  return (
    <div className="board">
      <div className="board-header">
        <div className="icons">
          <Xicon />
          <Oicon />
        </div>
        <div className="turn">
          {!xnext ? <Xicon /> : <Oicon />}
          <span>turn</span>
        </div>
        <div className="restart">
          <button className="btn btn-sm board-restart">
            <VscDebugRestart />
          </button>
        </div>
      </div>
      {/* //*******************  */}
      <div className="board-body">
        {squares.map((square, idx) => (
          <BoardCard
            key={idx}
            index={idx}
            player={square}
            active={winner && winnerLine && winnerLine.includes(idx)}
          />
        ))}
      </div>
      {/* //*******************  */}
      <div className="board-footer">
        <div className="card bg-blue">
          <span className="text-light">x(you)</span>
          <h4 className="text-lg">{ties.x}</h4>
        </div>
        <div className="card bg-light">
          <span className="text-light">ties</span>
          <h4 className="text-lg">{ties.x + ties.o}</h4>
        </div>
        <div className="card bg-yellow">
          <span className="text-light">o(cpu)</span>
          <h4 className="text-lg">{ties.o}</h4>
        </div>
      </div>
    </div>
  );
};

export default Board;
