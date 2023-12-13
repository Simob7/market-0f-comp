import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { PopupContext } from "../contextApi/Context";

const PopUps = () => {
  const { show, showPopup, hidePopup, popupMode } = useContext(PopupContext);
  return (
    <>
      {show && (
        <div className="popup">
          <div className="popup-content">
            <div className="container">
              {popupMode === "winner" &&   <Win />}
              {popupMode === "restart" && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUps;
