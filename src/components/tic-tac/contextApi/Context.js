import { createContext, useState } from "react";

const PopupContext = createContext();

const PopupState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner"); //winner || start
  //   *************************
  const showPopup = () => {
    setShow(true);
  };
  const hidePopup = () => {
    setShow(false);
  };
  //   *************************
  return (
    <PopupContext.Provider
      value={{
        // &&&&&&&&&&&&& useStates
        show,
        popupMode: mode,
        setPopupMode: setMode,
        // !!!!!! functions
        showPopup,
        hidePopup,
      }}>
      {props.children}
    </PopupContext.Provider>
  );
};
export { PopupContext, PopupState };
