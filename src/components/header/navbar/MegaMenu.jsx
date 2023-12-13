import React from "react";
// import img from "../../../assets/images/megaMenu.jpg";
import { linksOne, linksTwo } from "../../../data";
const MegaMenu = ({ open }) => {
  return (
    <>
      <div className="image">
        <img src="/assets/megaMenu.jpg" style={{ width: "400px" }} alt="" />
      </div>
      <ul className="links">
        {linksOne.map((item, idx) => (
          <li key={idx}>
            <a href="#">
              {item.icon}
              {item.link}
            </a>
          </li>
        ))}
      </ul>
      {/* links two */}
      <ul className="links">
        {linksTwo.map((item, idx) => (
          <li key={idx}>
            <a href="#">
              {item.icon}
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MegaMenu;
