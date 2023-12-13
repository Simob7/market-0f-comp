import React, { useState } from "react";
import "./navbar.css";

import { navLinks } from "../../../data";
import MegaMenu from "./MegaMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <a href="#" className="logo">
        Logo
      </a>
      {/* links =================================== */}
      <ul className="nav">
        {navLinks.map((navLink, idx) => (
          <li key={idx}>
            <a className="navLink" href={`#${navLink}`}>
              {navLink}
            </a>
          </li>
        ))}
        {/* mega menu */}
        <li>
          <a
            className={`mega ${open ? "toggleMenu" : null}`}
            onClick={() => setOpen(!open)}>
            other Links
          </a>
        </li>
        <div className={`mega-menu ${open ? "open" : ""}`}>
          <MegaMenu />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
