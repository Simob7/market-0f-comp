import React from "react";
import MainTitle from "../main-title/MainTitle";
import "./features.css";

const Features = ({ features }) => {
  return (
    <>
      <div className="features" id="features">
        <MainTitle title={"features"} />
        <div className="container">
          {features.map((item, idx) => (
            <div className={`box ${item.title}`} key={idx}>
              <div className="image-holder">
                <img src={`/assets/images/${item.img}`} alt="" />
              </div>
              <h2 style={{ backgroundColor: item.color }}>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link}>more</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
