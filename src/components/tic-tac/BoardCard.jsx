import React, { useContext } from "react";
import Xicon from "./icons/Xicon";
import Oicon from "./icons/Oicon";
import { GameContext } from "./contextApi/GameContext";

const BoardCard = ({ player = "noplayer", active, index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && player === "x" && "shadow-blue"}
      // **********************************************
      ${active && player === "o" && "shadow-yellow"} ${
        !active ? "shadow-gray" : "active"
      } `}
      onClick={() => handleSquareClick(index)}>
      {/* //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      {player === "x" && <Xicon color={active && "dark"} size="lg" />}
      {/* //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      {player === "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;
