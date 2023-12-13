import React from "react";
import { TfiClose } from "react-icons/tfi";
const Xicon = ({ color, size }) => {
  return (
    <div
      className={`icon ${color ? "icon-" + color : "icon-blue"} ${
        size && "icon-" + size
      }`}>
      <TfiClose />
    </div>
  );
};

export default Xicon;
