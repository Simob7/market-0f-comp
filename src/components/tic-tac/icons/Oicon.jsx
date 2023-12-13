import React from "react";
import { GoCircle } from "react-icons/go";

const Oicon = ({ color, size }) => {
  return (
    <div
      className={`icon ${color ? "icon-" + color : "icon-yellow"} ${
        size && "icon-" + size
      }`}>
      <GoCircle />
    </div>
  );
};

export default Oicon;
