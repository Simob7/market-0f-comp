import { createContext, useContext, useEffect, useState } from "react";
import { calcWinner } from "../helpers/CalcSquares";
import { PopupContext } from "./Context";

const GameContext = createContext();

const GameState = (props) => {
  const { hidePopup, showPopup, setPopupMode } = useContext(PopupContext);
  // &&&&&&&&&&&&&&&&&&&&&&& USESTASTS &&&&&&&&&&&&&&&&
  // &&&&&&&&&&&&&&&&&&&
  // &&&&&&&&&&&&&&&&
  const [screen, setScreen] = useState("start"); //start || board
  const [activeUser, setActiveUser] = useState("x"); // x || o
  const [playMode, setPlayerMode] = useState("user"); // user || cpu
  // create array of squares ================================
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);
  // winner state --------------------------------------------
  const [winner, setWinner] = useState(null); // x || o
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });
  // &&&&&&&&&&&&&&&&&&&&&&& USESTASTS &&&&&&&&&&&&&&&&
  // &&&&&&&&&&&&&&&&&&&
  // &&&&&&&&&&&&&&&&
  // ^^^^^^^^^^^^^^^^^^^^^^^^ USEEFFECT^^^^^^^^^^^^^^^^^^^^^^^
  useEffect(() => {
    checkNoWinner();
  }, [xnext, winner, screen]);
  // ^^^^^^^^^^^^^^^^^^^^^^^^ USEEFFECT^^^^^^^^^^^^^^^^^^^^^^^
  // ********* FUNCTIONS ***********************************
  // ********************************************
  // ****************************
  const changePlayMode = (mode) => {
    setPlayerMode(mode);
    setScreen("board");
  };
  const changeXnext = () => {
    setXnext(!xnext);
  };
  // ****** WINNER FUNCTIONS **********************************
  const handleReset = () => {
    setSquares(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hidePopup();
    setScreen("start");
  };
  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setXnext(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hidePopup();
  };
  // ****** WINNER FUNCTIONS **********************************
  // -----------------
  const handleSquareClick = (idx) => {
    const currentPlayer = xnext ? "o" : "x";
    // -----------------------------------------------------------------------
    if (playMode === "cpu" && currentPlayer !== activeUser) {
      return;
    }
    // -----------------------------------------------------------------------
    let ns = [...squares];
    ns[idx] = !xnext ? "x" : "o";
    setSquares(ns);
    setXnext(!xnext);
    // check winner --------------------------------------------------
    checkWinner(ns);
  };
  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      // set ties
      const ti = { ...ties };
      ti[isWinner.winner] += 1;
      setTies(ti);
      showPopup();
      setPopupMode("winner");
    }
  };
  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      setPopupMode("winner");
      showPopup();
    }
  };
  // ********* FUNCTIONS ***********************************
  // ********************************************
  // ****************************
  return (
    <GameContext.Provider
      value={{
        // {{{{{{STATES}}}}}}
        screen,
        activeUser,
        playMode,
        squares,
        xnext,
        ties,
        winnerLine,
        winner,
        // ((((((( FUNCTIONS)))))))
        handleReset,
        handleNextRound,
        changeXnext,
        setActiveUser,
        setPlayerMode,
        changePlayMode,
        handleSquareClick,
      }}>
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
