import React, { useContext } from "react";
import Xicon from "../icons/Xicon";
import { GameContext } from "../contextApi/GameContext";
import Oicon from "../icons/Oicon";

const Win = () => {
  const { winner, handleReset, handleNextRound } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <h1>you win !</h1>
          <h3
            className={`score-title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}>
            {winner === "x" ? <Xicon /> : <Oicon />}
            takes the round
          </h3>
        </>
      ) : (
        <h3 className="score_title text-yellow">no winner</h3>
      )}
      {/******************************** */}
      <div className="score-btns">
        <button onClick={handleReset} className="btn btn-sm">
          quit
        </button>
        <button onClick={handleNextRound} className="btn btn-sm btn-yellow">
          next round
        </button>
      </div>
    </div>
  );
};

export default Win;
