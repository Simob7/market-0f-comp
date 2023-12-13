import React from "react";
import "./Cards.css";

import { BsBoxArrowRight } from "react-icons/bs";
const Cards = ({ image, title, desc }) => {
  return (
    <div className="box">
      <img src={`assets/images/${image}`} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="info">
        <a href="#">Read More</a>
        <BsBoxArrowRight className="icon" />
      </div>
    </div>
  );
};

export default Cards;
