import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PopupState } from "./components/tic-tac/contextApi/Context";
import { GameState } from "./components/tic-tac/contextApi/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PopupState>
      <GameState>
        <App />
      </GameState>
    </PopupState>
  </React.StrictMode>
);
